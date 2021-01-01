import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

   
    
    const body = {
      email: form.value.email+"@nu.edu.pk",

      username: form.value.username,
      password: form.value.password,
      usertype: "Student",
    }
    this.auth.onRegister(body).subscribe(data => {

      if(data.success){
        this.toast.success("successful");
        this.router.navigateByUrl('home');

      }else if(data.msg){
        this.toast.error(data.msg);

      }

    })
  
    // console.log(form.value);
    
  }
  ngOnInit() {
    var element= document.getElementById('exampleInputEmail1');
element.addEventListener("keypress", event => {
  console.log(event.key)
  if (event.key=='@') {
    event.preventDefault();
  }
});
  }

}
