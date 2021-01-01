import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {


  constructor(private http:Http) { }
  bookground(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/bookground/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }
  deleteground(body:string,a) {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.put(' http://localhost:5000/item/deleteground/'+body,a,{ headers: headers }).pipe(
        map(res => res.json())
      )
  }
  addground(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/addground/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }

  addsport(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/addsport/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }
  getsport(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/getsport/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }
  addevent(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/addevent/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }
  getevent(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/getevent/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }
  getground(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/getground/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }
  getbookground(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/getbookground/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }
  delSport(body:string,a) {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.put(' http://localhost:5000/item/delSport/'+body,a,{ headers: headers }).pipe(
        map(res => res.json())
      )
  }
  deleteevent(body:string,a) {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.put(' http://localhost:5000/item/deleteevent/'+body,a,{ headers: headers }).pipe(
        map(res => res.json())
      )
  }
  deleteBookGround(body:string,a) {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.put(' http://localhost:5000/item/deleteBookGround/'+body,a,{ headers: headers }).pipe(
        map(res => res.json())
      )
  }
  deleteequip(body:string,a) {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.put(' http://localhost:5000/item/deleteequip/'+body,a,{ headers: headers }).pipe(
        map(res => res.json())
      )
  }
  addequip(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/addequip/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }
  addpost(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/addpost/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }
  getpost(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/getpost/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }
  getbookequip(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/getbookequip/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }
  getequip(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/getequip/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }
  bookequip(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.put(' http://localhost:5000/item/bookequip/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }

  deletereg(body:string,a) {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.put(' http://localhost:5000/item/deletereg/'+body,a,{ headers: headers }).pipe(
        map(res => res.json())
      )
  }
  getreg(body){
    // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(' http://localhost:5000/item/getreg/',body, { headers: headers }).pipe(
        map(res => res.json())
      )
  }

  
  deletepost(body:string,a) {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.put(' http://localhost:5000/item/deletepost/'+body,a,{ headers: headers }).pipe(
        map(res => res.json())
      )
  }
  deletebookequip(body:string,a) {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.put(' http://localhost:5000/item/deletebookequip/'+body,a,{ headers: headers }).pipe(
        map(res => res.json())
      )
  }
// ----------------------------------------------------------------
  
      FIRST(body){
      // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
      let headers = new Headers();
      headers.append('content-Type', 'application/json');
      return this.http.post('http://localhost:5000/item/FIRST/',body, { headers: headers }).pipe(
          map(res => res.json())
        )
    }
    
    getUserData(body){
      // return this.http.get('http://localhost:5000/user/getuserdata').pipe(map(res=>res.json()));
      let headers = new Headers();
      headers.append('content-Type', 'application/json');
      return this.http.put(' http://localhost:5000/user/getuserdata/',body, { headers: headers }).pipe(
          map(res => res.json())
        )
    }
  
    deleteuser(body:string) {
      let headers = new Headers();
      headers.append('content-Type', 'application/json');
      return this.http.put('http://localhost:5000/user/userdelete/'+body, { headers: headers }).pipe(
          map(res => res.json())
        )
    }
    updateuser(newuser,id) {
      let headers = new Headers();
      headers.append('content-Type', 'application/json');
      return this.http
        .put('http://localhost:5000/user/updateuser/'+id, newuser, { headers: headers }).pipe(
          map(res => res.json)
        )
    }

    
 
 

}
