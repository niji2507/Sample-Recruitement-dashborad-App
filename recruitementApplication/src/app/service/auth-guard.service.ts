import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from './../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router :Router,
    private authenticateService : AuthenticationService) { }

  canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot ){
    if(this.authenticateService.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}