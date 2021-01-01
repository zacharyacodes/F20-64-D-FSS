import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersdataService } from 'src/app/usersdata.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.css']
})
export class NewsFeedsComponent implements OnInit {

  constructor(
    private userdataservice: UsersdataService,
    private _sanitizer: DomSanitizer,
    private toast: ToastrService ,
    private router: Router,
    private http: HttpClient,

  ) { }


  a1;
  del1(p)
  {
      this.a1=p;
  }
  c1(){
    document.getElementById('cl71').click();
    
  }

  deleteRow1(){

              this.userdataservice.deleteevent(this.a1._id,this.a1).subscribe(users=>{
                if(users.success==true){
                  this.toast.success('Deleted',"",{
                    positionClass: 'toast-top-left' 
                  });
                  document.getElementById('cl71').click();
                  for(let i = 0; i < this.eventList.length; ++i){
                    if (this.eventList[i]._id == this.a1._id) {
                        this.eventList.splice(i,1);  
                  }
                }
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

    var body=[];
    body[0]=this.a.imagesname;
    // console.log(body1)
        this.http.post<any>('http://localhost:5000/deletephoto',body).subscribe(
          (res) => {
                console.log(res);
            if(res.success==true){
              this.userdataservice.deletepost(this.a._id,this.a).subscribe(users=>{
                if(users.success==true){
                  this.toast.success('Deleted',"",{
                    positionClass: 'toast-top-left' 
                  });
                  document.getElementById('cl7').click();
                  for(let i = 0; i < this.postlist.length; ++i){
                    if (this.postlist[i]._id == this.a._id) {
                        this.postlist.splice(i,1);  
                  }
                }
                }else if(users.success==false){
                  this.toast.error('Error',"",{
                    positionClass: 'toast-top-left' 
                  });
            
                }
              })
            }
            }
    
      );
    
    
    }
  

    addevent(form:NgForm){
      var bool=true;
      if(form.value.title == "" || form.value.title == null){
        this.toast.error( 'Enter Title');
        bool=false;
      }
      if(form.value.description == "" || form.value.description == null){
        this.toast.error( 'Enter Description');
        bool=false;
      }
      if(bool==true){
        
              var body={
                  title:form.value.title,
                  description:form.value.description
                }
                console.log(body)
                
                 this.userdataservice.addevent(body).subscribe(data=>{
                  if (data.success==true) {
                    this.getevent();
                    this.toast.success("successful","",{
                      positionClass: 'toast-top-left' 
                    });
                    form.reset();
                    document.getElementById('cl66').click();
            
                  }
                  else if(data.success==false){
                    this.toast.error("Error","",{
                      positionClass: 'toast-top-left' 
                    });
            
                  }
                  else {
                    this.toast.error("unsucessful","",{
                      positionClass: 'toast-top-left' 
                    });
                    // this.toast.error(data.err);
            
                  }
            
                })
              }
              }


safeurl;

  status;multipleImages=[];urls
  detectFiles(event) {
    if (event.target.files.length > 0) {
      
      this.multipleImages = event.target.files;
    }
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }
  namelist
add(form:NgForm){
  var bool=true;
  console.log(this.multipleImages.length)
  if(form.value.title == "" || form.value.title == null){
    this.toast.error( 'Enter Title');
    bool=false;
  }
  if(form.value.description == "" || form.value.description == null){
    this.toast.error( 'Enter Description');
    bool=false;
  }
  if(this.multipleImages.length==0){
    this.toast.error( 'Select Image');
    bool=false;
  }
  if(bool==true){
    this.namelist=[];
    const formData = new FormData();
    var name;
    for(let img of this.multipleImages){
      name= Math.random()+img.name;
      formData.append('files', img,name);
      this.namelist.push(name);
    }
      
    this.http.post<any>('http://localhost:5000/multipleFiles', formData,).subscribe(
      (res) => {
        console.log(res);

        if(res.sttus== 'ok'){
    
          var body={
              imagesname:this.namelist[0],
              title:form.value.title,
              description:form.value.description
            }
            console.log(body)
            
             this.userdataservice.addpost(body).subscribe(data=>{
              if (data.success==true) {
                this.getstockData();
                this.toast.success("successful","",{
                  positionClass: 'toast-top-left' 
                });
                this.urls=[];
                $("#uu").val('');
                form.reset();
                document.getElementById('cl').click();
        
              }
              else if(data.success==false){
                this.toast.error("Error","",{
                  positionClass: 'toast-top-left' 
                });
        
              }
              else {
                this.toast.error("unsucessful","",{
                  positionClass: 'toast-top-left' 
                });
                // this.toast.error(data.err);
        
              }
        
            })
        

        }

        }
      ,
      (err) => console.log(err)
  );

  }
}
eventList=[];
getevent(){
  this.eventList=[]

  var body11 ={
    token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68',
    }
  this.userdataservice.getevent(body11).subscribe(data=>{
      this.eventList=data;
      // console.log(data)
  })
}

postlist=[];
getstockData(){
  this.postlist=[]

  var body11 ={
    token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68',
    }
  this.userdataservice.getpost(body11).subscribe(data=>{
      this.postlist=data;
      console.log(data)
      this.ImgUrl = `http://localhost:5000/`;
  })
} ImgUrl
  ngOnInit() {
    var a =  localStorage.getItem('status');
    console.log("a== "+a);
    this.status=a;
  
    if(a=="adminloggedin"||a=="Studentloggedin"){
   }
   
   else{
    this.router.navigateByUrl('home');

   }
   this.getevent();
   this.getstockData();
  }

}
