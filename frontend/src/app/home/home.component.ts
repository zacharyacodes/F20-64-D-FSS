import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Toast, ToastrService } from 'ngx-toastr';
import { UsersdataService } from '../usersdata.service';
import { s } from '@angular/core/src/render3';
import { NewUser } from '../admin/newuser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataFromSignIn;
  userDataList:NewUser[]=[];
 public flag;
 public flag1;
  constructor(
    private router: Router,
    private auth: AuthService,
    private toast: ToastrService,
    private userdataservice: UsersdataService
  ) { }
  nav(){
    this.router.navigateByUrl('register');

  }
  ngOnInit() {
   // var a="none";
    // localStorage.setItem('status',a ); 
    
    var a =  localStorage.getItem('status');
    console.log("a== "+a);
    if(a=="adminloggedin"){

      this.router.navigateByUrl('employee/newsfeed');
    
  }
  else if(a=="Studentloggedin"){
  this.router.navigateByUrl('employee/newsfeed');
  }
 
   }
  
 
from;to;


onSignIn(form: NgForm) {
 
  var bool =true;

  if(form.value.email==''||form.value.email==null){
     this.toast.error("Enter Email","Invalid Input");
     bool =false;
  }
  
  if(form.value.password==''||form.value.password==null){
    bool =false;
    this.toast.error("Enter Password","Invalid Input");

  }
  if(bool==true){
          
      var body={
        email: form.value.email,
        password: form.value.password
      } 
    
      this.auth.onSignin(body).subscribe(data => {

        if(data.success==true){

                  var o=data.user.usertype;
                  console.log(data)
                  if(o=="Admin"){
            
                    var a="adminloggedin";
                    localStorage.setItem('status',a );
                    this.router.navigateByUrl('employee/newsfeed');

                  }
                  else if(o=="Student"){

                    localStorage.setItem('key',form.value.email );
                    // localStorage.setItem('psw',form.value.password );
                      var a="Studentloggedin";
                      localStorage.setItem('status',a );
                      this.router.navigateByUrl('employee/newsfeed');  

                  }
              

        }
        if(data.msg){
          this.toast.error(data.msg,"Invalid Input");

        }

      })
  }}
}

  // }


