import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersdataService } from '../usersdata.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userDataList:User[]=[];

 
    constructor(
      private router: Router,
      private userdataservice:UsersdataService,
      private http: HttpClient,

    ) { }
  public day;
  month;
  year;

  integer;
  dates;
  yesterday;
x(){
  document.getElementById('butt').click();
}

x1(){
  localStorage.setItem('sportsname','null');
  this.router.navigateByUrl('employee/equipment')
  document.getElementById('butt').click();
}
  
status;
dashboard
  ngOnInit() {
    var a =  localStorage.getItem('status');
    console.log("a== "+a);
    this.status=a;
    if(a=="Studentloggedin"||a=="adminloggedin"){
    }
    else{
     this.router.navigateByUrl('home');
 
    }
    if(a=="adminloggedin"){
      this.dashboard='Admin Dashboard';
  
      }
      else if(a=="Studentloggedin"){
      this.dashboard='Student Dashboard';
        
      }
    

  }
  onSignOut() {
    localStorage.setItem('loggedIn', 'false');
    var a=null;
    localStorage.setItem('status',a );
    this.router.navigate(['/']);
  }
}
  