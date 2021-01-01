import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/admin/newuser';
import { Subject } from 'rxjs';
import { UsersdataService } from 'src/app/usersdata.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userDataList:NewUser[]=[];
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
    
    private toast: ToastrService
  ) { }
  getUserData(){
    var body ={
    token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'
    
    }

    this.userdataservice.getUserData(body).subscribe(users=>{
      this.userDataList=users;
      console.log('users data '+this.userDataList[0].username);
      this.dtTrigger.next();
   
    })
  }
 
  getUserData1(){
    this.userDataList=[];
    var body ={
      token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'
      
      }
    this.userdataservice.getUserData(body).subscribe(users=>{
     
      var myTable = $('#usertable').DataTable();
      myTable.clear();
      this.userDataList=users;
      if ($.fn.dataTable.isDataTable('#usertable')) {
        const mytbl = $('#usertable').DataTable();
        mytbl.destroy();
      }  
      // console.log('users data '+this.userDataList[0].username);
      this.dtTrigger.next();
   
    })
  }
  updatetable(){
    if ($.fn.dataTable.isDataTable('#usertable')) {
      const mytbl = $('#usertable').DataTable();
      mytbl.destroy();
    }
    this.dtTrigger.next();
  
  }
  deleteRow(a){
    for(let i = 0; i < this.userDataList.length; ++i){
        if (this.userDataList[i].username == a.username) {
          if (this.userDataList[i].email == a.email) {
    
            this.userDataList.splice(i,1);  
          
          }
        }
    }
    this.userdataservice.deleteuser(a._id).subscribe(users=>{
      if(users.success==true){
        this.toast.success('Deleted',"",{
          positionClass: 'toast-top-left' 
        });
      }else if(users.success==false){
        this.toast.error('Error',"",{
          positionClass: 'toast-top-left' 
        });

      }
    })
    
    
    this.updatetable();
  
}

clickuser(u){
  console.log("cick= "+u._id);
  this.id=u._id;
  this.p=u.password;
  this.user_name=u.username;
  this.email1=u.email;
  this.role2=u.usertype;
  // this.bn=u.bn;
 
  if(u.status=="Active"){
      this.status1="Active";
  }
  else{
    this.status1="Suspended";
  }

}

edituser(form: NgForm){
  if (form.value.username == "") {
    this.toast.error('Enter user name ',"",{
      positionClass: 'toast-top-left' 
    });
    return;
  }
  
  else if (form.value.email == "") {
    console.log("Enter email", "invalidasda");
    this.toast.error('Enter email ',"",{
      positionClass: 'toast-top-left' 
    });
    return;

  }
  else if (form.value.password == "") {
    console.log("Enter password");
    this.toast.error('Enter password ',"",{
      positionClass: 'toast-top-left' 
    });
    return;
  }
  else if (form.value.confirmPassword == "") {
    console.log("Enter password");
    this.toast.error('Enter confirm password ',"",{
      positionClass: 'toast-top-left' 
    });
    return;
  }
  else if (form.value.password != form.value.confirmPassword) {
    this.toast.error("password didn't matched","",{
      positionClass: 'toast-top-left' 
    });
    return;

  }

  // else if (form.value.bn == "") {
  //   this.toast.error('Enter branch number ',"",{
  //     positionClass: 'toast-top-left' 
  //   });
  //   return;
  // }
  else if (form.value.usertype == "") {
    console.log("Enter user type");
    this.toast.error('Enter user type ',"",{
      positionClass: 'toast-top-left' 
    });
    return;
  }
  else{
  // var a;
    // if(form.value.bn=="none"){
    //   a="Admin"
    // }
    // else{
    //   a=form.value.bn;
    // }
    let newuser: NewUser = {
      username: form.value.username,
      usertype:form.value.role,
      email: form.value.email,
      password:this.p,
      status:form.value.status,
    }
    
    this.userdataservice.updateuser(newuser,this.id)
      .subscribe(result => {
      // window.location.reload();
      
       this.getUserData1();

        
      });
      
      document.getElementById('cl').click();

  }

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
