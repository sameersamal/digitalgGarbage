import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';

import { BinCreateComponent } from './bin/create/bincreate.component';
import { BinUpdateComponent } from './bin/update/binupdate.component';

import { DriverCreateComponent } from './driver/create/drivercreate.component';
import { DriverUpdateComponent } from "./driver/update/driverupdate.component";

import { RequestCreateComponent } from "./request/create/requestcreate.component";
import { RequestUpdateComponent } from "./request/update/requestupdate.component";

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'adminrequest', component: AdminComponent },
  

  { path: 'adminbin', component: AdminComponent },
  { path: 'admindriver', component: AdminComponent },
  
  { path: 'bincreate', component: BinCreateComponent },
  { path: 'binupdate', component: BinUpdateComponent },
  
  { path: 'drivercreate', component: DriverCreateComponent },
  { path: 'driverupdate', component: DriverUpdateComponent },

  { path: 'requestcreate', component: RequestCreateComponent },
  { path: 'requestupdate', component: RequestUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, LogoutComponent, DashboardComponent, AdminComponent, BinCreateComponent, BinUpdateComponent,  DriverCreateComponent, DriverUpdateComponent, RequestCreateComponent, RequestUpdateComponent ];
