import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }
 
  onRegister(body) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/user/onRegister', body, { headers: headers }).pipe(map(res => res.json()));

  }
  onSignup(body) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/user/signup', body, { headers: headers }).pipe(map(res => res.json()));

  }
  onSignin(body) {
    const headers = new Headers();
    console.log("saasa");
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/user/signin', body, { headers: headers }).pipe(map(res => res.json()));

  }
}
