import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { EmailValidator, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  dataFromSignup;

  constructor(
    private router: Router, private auth: AuthService, private toast: ToastrService
  ) { }
  
  onSignup(form: NgForm) {
    console.log(form.value);
    if (form.value.username == "") {
      this.toast.error('Enter user name ',"",{
        positionClass: 'toast-top-left' 
      });
      return;
    }
    
    if (form.value.email == "") {
      console.log("Enter email", "invalidasda");
      this.toast.error('Enter email ',"",{
        positionClass: 'toast-top-left' 
      });
      return;

    }
    if (form.value.password == "") {
      console.log("Enter password");
      this.toast.error('Enter password ',"",{
        positionClass: 'toast-top-left' 
      });
      return;
    }
    if (form.value.confirmPassword == "") {
      console.log("Enter password");
      this.toast.error('Enter confirm password ',"",{
        positionClass: 'toast-top-left' 
      });
      return;
    }
    if (form.value.password != form.value.confirmPassword) {
      this.toast.error("password didn't matched","",{
        positionClass: 'toast-top-left' 
      });
      return;

    }

    if (form.value.usertype == "") {
      console.log("Enter user type");
      this.toast.error('Enter user type ',"",{
        positionClass: 'toast-top-left' 
      });
      return;
    }
   
    // var check=this.validateEmail(form.value.email);
    // console.log("emailcheck="+check);
  //  if(check==true){
    const body = {
      email: form.value.email+"@nu.edu.pk",
      username: form.value.username,
      password: form.value.password,
      // bn:a,
      usertype: form.value.usertype,
      status:"Active",
    }
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

    // console.log(form.value);
    
  }
  
  ngOnInit() {
     
    var a =  localStorage.getItem('status');
    console.log("a== "+a);
  
    if(a=="adminloggedin"){
   }
   
   else{
    this.router.navigateByUrl('home');

   }
// this.email();
var element= document.getElementById('exampleInputEmail1');
element.addEventListener("keypress", event => {
  console.log(event.key)
  if (event.key=='@') {
    event.preventDefault();
  }
});
  }

}
