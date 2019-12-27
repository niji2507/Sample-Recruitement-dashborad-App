import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getAuthenticatedUser() {
    return sessionStorage.getItem('aunthenticatedUser');
  }
  getLoggedInUserName() {
    return this.getAuthenticatedUser();
  }
  authenticate(username,password) {
    if(username === "Admin" && password === "Admin@1234") {
      sessionStorage.setItem("aunthenticatedUser", username);
      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    let user =  this.getAuthenticatedUser();
    if(user) {
      return true;
    }
    return false;
  }

  logout(){
     sessionStorage.removeItem('aunthenticatedUser');
  }
}
