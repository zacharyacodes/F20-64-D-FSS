import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersdataService } from 'src/app/usersdata.service';

@Component({
  selector: 'app-select-sports',
  templateUrl: './select-sports.component.html',
  styleUrls: ['./select-sports.component.css']
})
export class SelectSportsComponent implements OnInit {

  constructor(
    private router: Router,
    private toast: ToastrService
     ,
    private userdataservice: UsersdataService,
  ) { }
nav(a){
  // console.log('ss')
  localStorage.setItem('sportsname',a);
  this.router.navigateByUrl('employee/equipment');  

}


  productsList;
  getstockData(){
    this.productsList=[]
  
    var body11 ={
      token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68',
      }
    this.userdataservice.getsport(body11).subscribe(data=>{
        this.productsList=data;
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
    this.getstockData();
  }

}
