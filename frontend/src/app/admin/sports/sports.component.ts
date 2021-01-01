import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { UsersdataService } from 'src/app/usersdata.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private router: Router,
    private toast: ToastrService
     ,
    private userdataservice: UsersdataService,


  ) { }
  selectedequip=[];
  select(form:NgForm){
    console.log(this.equipdata)
    console.log(form.value.time)
    var bool=true;
    if(form.value.time==''||form.value.time==null||form.value.time=='none'){
      this.toast.error("Select Equipments"
      );
      bool=false;
    }
    else if (bool==true){
      var s= form.value.time.split('/');
      
      this.selectedequip.push(s[0]);
      this.equipdata.splice(s[1],1);  
        // var select =document.getElementById('timeslots');
        $('#timeslots').prop('selectedIndex', 0);
      form.reset();
    }
   
  }
  equipdata=[];
  editclose(a,pro){
    // console.log(pro)

    var body ={
   name:pro
 }
    this.equipdata.push(body);

    this.selectedequip.splice(a,1);  
    $('#timeslots').prop('selectedIndex', 0);

  }

  addstockbtn
  add(form: NgForm){
    var bool= true;
    if (form.value.name == "" || form.value.name == null) {
      this.toast.error("Enter Name"
      );
      bool= false;
    }
    if (this.selectedequip.length==0) {
      this.toast.error("Select Equipments"
      );
      bool= false;
    }
    if(bool==true){
 
      let timeslots="";
      for(let i=0;i<this.selectedequip.length;i++){

        if(timeslots==''){

          timeslots= this.selectedequip[i];


          }     
          else if(timeslots!=''){
            timeslots=timeslots + ", "+ this.selectedequip[i];

          }
       
      }
 
      var body={
              name:form.value.name,
              equipments:timeslots
              }
              console.log(body);
              $('#addstockbtn').attr('disabled','disabled');
              this.addstockbtn="   Processing";
               this.userdataservice.addsport(body).subscribe(data=>{
                if (data.success==true) {
                  $('#addstockbtn').removeAttr('disabled');
                  this.addstockbtn="";
                  this.getstockData1();
                  this.toast.success("successful","",{
                    positionClass: 'toast-top-left' 
                  });
                  this.selectedequip=[];
                  this.getequipdata();
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

  a;
  del(p)
  {
      this.a=p;
  }
  c(){
    document.getElementById('cl7').click();
    
  }
  deleteRow(){
  
  
            this.userdataservice.delSport(this.a._id,this.a).subscribe(users=>{
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
  

  getstockData1(){
    this.productsList=[]
    var body11 ={
      token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68',
      
      }
    this.userdataservice.getsport(body11).subscribe(data=>{
  
      var myTable = $('#stocktable').DataTable();
      myTable.clear();
        this.productsList=data;
      if ($.fn.dataTable.isDataTable('#stocktable')) {
        const mytbl = $('#stocktable').DataTable();
        mytbl.destroy();
      }
      this.dtTrigger.next();
  
   
    })
  }
  productsList;
  getstockData(){
    this.productsList=[]
  
    var body11 ={
      token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68',
      }
    this.userdataservice.getsport(body11).subscribe(data=>{
        this.productsList=data;
      console.log(this.productsList)
      this.dtTrigger.next();
  
   
    })
  } 

  getequipdata(){
  
    var body11 ={
      token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68',
      }
    this.userdataservice.getequip(body11).subscribe(data=>{
      this.equipdata=[];
      this.equipdata=data;
    })
  } 
  status
  ngOnInit() {
    var a =  localStorage.getItem('status');
    console.log("a== "+a);
    this.status=a;
  
    if(a=="adminloggedin"||a=="Studentloggedin"){
   }
   
   else{
    this.router.navigateByUrl('home');

   }
    this.getequipdata();
    this.getstockData();
  }

}
