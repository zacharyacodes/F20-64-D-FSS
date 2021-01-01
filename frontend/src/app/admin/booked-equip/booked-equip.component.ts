import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { UsersdataService } from 'src/app/usersdata.service';

@Component({
  selector: 'app-booked-equip',
  templateUrl: './booked-equip.component.html',
  styleUrls: ['./booked-equip.component.css']
})
export class BookedEquipComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private router: Router,
    private toast: ToastrService
     ,
    private userdataservice: UsersdataService,


  ) { }



  
a;
del(p)
{
    this.a=p;
}
c(){
  document.getElementById('cl7').click();
  
}
deleteRow(){


          this.userdataservice.deletebookequip(this.a._id,this.a).subscribe(users=>{
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
stdname;
getUserData(){
  var body ={
  token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'
  
  }
  this.userdataservice.getUserData(body).subscribe(users=>{
      var email=localStorage.getItem('key');
      for(let i=0;i<users.length;i++){
        if(users[i].email==email){
            this.stdname=users[i].username;
            break;
        }
      }
    this.getstockData();

  })
}
  productsList;
  getstockData(){
    this.productsList=[]
  
    var body11 ={
      token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68',
      }
    this.userdataservice.getbookequip(body11).subscribe(data=>{
      if(this.status=='adminloggedin' ){
        this.productsList=data;
      // this.dtTrigger.next();
  
      }else{
          for(let i=0;i<data.length;i++){
              if(data[i].name==this.stdname){
                this.productsList.push(data[i]);
                // this.dtTrigger.next();
            
              }
          }
      }
      this.dtTrigger.next();
      
   
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
   if(a=="Studentloggedin"){
    this.getUserData();

   }else{
    this.getstockData();

   }
  }

}

