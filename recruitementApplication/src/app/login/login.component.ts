import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {AuthenticationService} from './../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;

  invalidLogin = false;
  errorMessage = "Invalid Credentials - User name or Password is invalid";
  constructor(private router: Router,
              private authenticateService : AuthenticationService,
              private formBuider : FormBuilder) { 
                this.loginForm = this.formBuider.group({
                  username : ['', Validators.required],
                  password : ['', Validators.required]
                })
              }

  ngOnInit() {
  }
  doLogin(){
    //redirect to dashboard page
    if(this.authenticateService.authenticate(this.loginForm.get('username').value,this.loginForm.get('password').value)) {
      this.router.navigate(['dashboard']);
    }else {
      this.invalidLogin = true;
    }
  }

}
