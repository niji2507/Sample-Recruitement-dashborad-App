import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login.component';
import {ErrorComponent} from './error/error.component';
import {LogoutComponent} from './logout/logout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuardService} from './service/auth-guard.service';
const routes: Routes = [
  { path :'',component:LoginComponent},
  { path :'login',component:LoginComponent},
  { path :'logout',component:LogoutComponent,canActivate:[AuthGuardService]},
  { path :'dashboard',component:DashboardComponent,canActivate:[AuthGuardService]},
  { path :'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
