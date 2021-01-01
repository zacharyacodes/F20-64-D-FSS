import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { UsersdataService } from 'src/app/usersdata.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private router: Router,
    private toast: ToastrService
     ,
    private userdataservice: UsersdataService,


  ) { }


  editclose(a){
    this.nexttime=this.selectedTimeslots[a];
    this.selectedTimeslots.splice(a,1);  

  }

  nexttime;
  select(form:NgForm){
    if(form.value.time=='' ||form.value.time=='none'||form.value.time==null ){
      this.toast.error("Select Time Slot"
      );
    }else{
      var s= form.value.time.split('/');
      this.selectedTimeslots.push(s[0]);
      this.nexttime=s[1];
      console.log(this.nexttime);
  
      form.reset();
    }
   
  }

  equipName;quantity;id;
  Details(a){
    this.equipName=a.name;
    this.quantity=a.quantity;
    this.id=a._id
    this.getEquip();
  }
  equipground(form: NgForm){
    var bool= true;
    if (form.value.name == "" &&this.status=='adminloggedin'   || form.value.name == null &&this.status=='adminloggedin'  ) {
      this.toast.error("Enter Name"
      );
      bool= false;
    }
    if (form.value.quantity == "" || form.value.quantity == null) {
      this.toast.error("Enter Quantity"
      );
      bool= false;
    }
    if (form.value.quantity >this.quantity ) {
      this.toast.error("Quantity Not Available"
      );
      bool= false;
    }
    if (this.selectedTimeslots.length==0) {
      this.toast.error("Select Time Slots"
      );
      bool= false;
    }
    if(bool==true){

      let timeslots="";
      for(let i=0;i<this.selectedTimeslots.length;i++){

        if(timeslots==''){

          timeslots= this.selectedTimeslots[i];


          }     
          else if(timeslots!=''){
            timeslots=timeslots + ", "+ this.selectedTimeslots[i];

          }
       
      }
        var stname;
      if(this.status=='adminloggedin'  ){
        stname=form.value.name;
      }else{
          stname=this.stdname;
      }
            var body={
              name:stname,
              timeslots:timeslots,
              equipName:this.equipName,
              quantity:form.value.quantity,
              newquantity:this.quantity-form.value.quantity,
              id:this.id
              }
              console.log(body);
               this.userdataservice.bookequip(body).subscribe(data=>{
                if (data.success==true) {
                  this.getstockData1();
                  this.toast.success("successful","",{
                    positionClass: 'toast-top-left' 
                  });
                  this.getEquip();
                  form.reset();
                  this.selectedTimeslots=[];
                  document.getElementById('cl55').click();
          
                }
              
                else {
                  this.toast.error("unsucessful","",{
                    positionClass: 'toast-top-left' 
                  });
          
                }
          
              })
   
    }
  }
  timeSlotsList=[];status;
  selectedTimeslots=[];

  booked=[];
  getEquip(){
    this.booked=[];

  
    var body11 ={
      token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68',
      }
    this.userdataservice.getbookequip(body11).subscribe(data=>{
        this.booked=data;

        var timeSlotsList1=["8:30 am - 9:30 am","9:30 am - 10:30 am","10:30 am - 11:30 am","11:30 am - 12:30 am","12:30 am - 1:30 pm","1:30 am - 2:30 pm","2:30 am - 3:30 pm","3:30 am - 4:30 pm"]
var newlist=[];
this.timeSlotsList=[];

for(let i=0;i<this.booked.length;i++){
  if(this.booked[i].equipName==this.equipName){
    
    var array1= this.booked[i].timeslots.split( ", ");
    
    for(let j=0;j<array1.length;j++){

      newlist.push(array1[j]);
    }
  }

}
this.timeSlotsList=timeSlotsList1;
// console.log(newlist)
for(let i=0;i<newlist.length;i++){
  var array1= newlist[i];
  
  for(let j=0;j<timeSlotsList1.length;j++){

    if(array1==timeSlotsList1[j]){
      this.timeSlotsList.splice(j,1);  

    }

  }
}

// console.log(newlist);
    })
  } 


  addstockbtn
  add(form: NgForm){
    var bool= true;
    if (form.value.name == "" || form.value.name == null) {
      this.toast.error("Enter Name"
      );
      bool= false;
    }
    if (form.value.quantity == "" || form.value.quantity == null) {
      this.toast.error("Enter Quantity"
      );
      bool= false;
    }
    if(bool==true){
            var body={
              name:form.value.name,
              quantity:form.value.quantity,

              }
              console.log(body);
              $('#addstockbtn').attr('disabled','disabled');
              this.addstockbtn="   Processing";
               this.userdataservice.addequip(body).subscribe(data=>{
                if (data.success==true) {
                  $('#addstockbtn').removeAttr('disabled');
                  this.addstockbtn="";
                  this.getstockData1();
                  this.toast.success("successful","",{
                    positionClass: 'toast-top-left' 
                  });
    $('#timeslots123').prop('selectedIndex', 0);

                  form.reset();
                  document.getElementById('cl4').click();
          
                }
                else if(data.msg){
                  $('#addstockbtn').removeAttr('disabled');
                  this.addstockbtn="";
                  this.toast.error(data.msg,"",{
                    positionClass: 'toast-top-left' 
                  });
          
                }
                else {
                  $('#addstockbtn').removeAttr('disabled');
                  this.addstockbtn="";
                  this.toast.error("unsucessful","",{
                    positionClass: 'toast-top-left' 
                  });
                  // this.toast.error(data.err);
          
                }
          
              })
   
    }
  }
  getstockData1(){
    this.productsList=[]
    var body11 ={
      token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68',
      
      }
    this.userdataservice.getequip(body11).subscribe(data=>{
  
      var myTable = $('#stocktable').DataTable();
      myTable.clear();
      // if(data==null){
        this.productsList=data;
      // }else{
        // this.productsList =   new Array<Object>(data);
  
      // }
      
      if ($.fn.dataTable.isDataTable('#stocktable')) {
        const mytbl = $('#stocktable').DataTable();
        mytbl.destroy();
      }
      this.dtTrigger.next();
  
   
    })
  }

  
a;
del(p)
{
    this.a=p;
}
c(){
  document.getElementById('cl7').click();
  
}
deleteRow(){


          this.userdataservice.deleteequip(this.a._id,this.a).subscribe(users=>{
            if(users.success==true){
              this.toast.success('Deleted',"",{
                positionClass: 'toast-top-left' 
              });
              document.getElementById('cl7').click();
              for(let i = 0; i < this.productsList.length; ++i){
                if (this.productsList[i]._id == this.a._id) {
                    this.productsList.splice(i,1);  
              }
            }
            this.updateleasetable();
            
        
            }else if(users.success==false){
              this.toast.error('Error',"",{
                positionClass: 'toast-top-left' 
              });
        
            }
          })
        
    



  // this.router.navigateByUrl('admin/inventory');


}

updateleasetable(){
  if ($.fn.dataTable.isDataTable('#stocktable')) {
    const mytbl = $('#stocktable').DataTable();
    mytbl.destroy();
  }
  this.dtTrigger.next();

}

  productsList;
  getstockData(){
    this.productsList=[]
  
    var body11 ={
      token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68',
      }
    this.userdataservice.getequip(body11).subscribe(data=>{

      this.name=localStorage.getItem('sportsname');
      if(this.name=='null'){
        this.productsList=data;
      }else{

        var a =this.name.split(", ");
        for(let i=0;i<a.length; i++){
          var b =a[i];
          for(let j=0;j<data.length;j++){
            if(b==data[j].name){
              this.productsList.push(data[j]);

            }
          }

        }
      
      }


        this.dtTrigger.next();
  
   
    })
  } 
  userDataList=[];
  getUserData(){
    var body ={
    token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'
    
    }
    this.userDataList=[];
    this.userdataservice.getUserData(body).subscribe(users=>{
      console.log(this.status+" ==adminloggedin")
      if(this.status=='adminloggedin' ){
        for(let i=0;i<users.length;i++){
          if(users[i].usertype=='Student'){
            this.userDataList.push(users[i]);
          }
        }
      }else{
        var email=localStorage.getItem('key');
        for(let i=0;i<users.length;i++){
          if(users[i].email==email){
              this.stdname=users[i].username;
              break;
          }
        }

      }
        
   
    })
  }

  name;
  stdname;  // status name
  ngOnInit() {
    var a =  localStorage.getItem('status');
    console.log("a== "+a);
    this.status=a;
  
    if(a=="adminloggedin"||a=="Studentloggedin"){
   }
   
   else{
    this.router.navigateByUrl('home');

   }

   this.getUserData();
this.getstockData();

  }

}
