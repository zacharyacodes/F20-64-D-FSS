import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { UsersdataService } from 'src/app/usersdata.service';
import { AuthService } from 'src/services/auth/auth.service';
import { NewUser } from '../newuser';

@Component({
  selector: 'app-registrations-request',
  templateUrl: './registrations-request.component.html',
  styleUrls: ['./registrations-request.component.css']
})
export class RegistrationsRequestComponent implements OnInit {

  userDataList=[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  b:any;
  id:any;
  mo;bo;
  p:any;
  public user_name="";
  public email1="";
  public role1="";
  // public bn="";
  public role2="";
  public status;
  public status1;
  constructor(
    private userdataservice: UsersdataService,
    private router: Router,
    private auth: AuthService,
    private toast: ToastrService
  ) { }
  getUserData(){
    var body ={
    token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'
    
    }

    this.userdataservice.getreg(body).subscribe(users=>{
      this.userDataList=users;
      this.dtTrigger.next();
   
    })
  }
 
  onSignup(form) {

    const body = {
      email: form.email,
      username: form.username,
      password: form.password,
      usertype: form.usertype,
      status:"Active",
    }
  
    this.userdataservice.deletereg(form._id,form).subscribe(users=>{
      if(users.success==true){
        this.auth.onSignup(body).subscribe(data => {

          if(data.success){
            this.toast.success("successful","",{
              positionClass: 'toast-top-left' 
            });
            this.router.navigateByUrl('employee/users');
    
          }else if(data.msg){
            this.toast.error(data.msg,"",{
              positionClass: 'toast-top-left' 
            });
    
          }
    
        })
       
      
      }else if(users.success==false){
        this.toast.error('Error',"",{
          positionClass: 'toast-top-left' 
        });
  
      }
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
  
  
            this.userdataservice.deletereg(this.a._id,this.a).subscribe(users=>{
              if(users.success==true){
                this.toast.success('Deleted',"",{
                  positionClass: 'toast-top-left' 
                });
                document.getElementById('cl7').click();
                for(let i = 0; i < this.userDataList.length; ++i){
                  if (this.userDataList[i]._id == this.a._id) {
                      this.userDataList.splice(i,1);  
                }
              }
              this.updateleasetable();
              
          
              }else if(users.success==false){
                this.toast.error('Error',"",{
                  positionClass: 'toast-top-left' 
                });
          
              }
            })
 
 
          }

  updateleasetable(){
    if ($.fn.dataTable.isDataTable('#stocktable')) {
      const mytbl = $('#stocktable').DataTable();
      mytbl.destroy();
    }
    this.dtTrigger.next();
  
  }
  ngOnInit() {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    
    var a =  localStorage.getItem('status');
    console.log("a== "+a);
  
    if(a=="adminloggedin"){
   }
   
   else{
    this.router.navigateByUrl('home');

   }
    this.getUserData();
  }

}
