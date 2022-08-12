import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { BinCreateComponent } from './bin/create/bincreate.component';
import { BinUpdateComponent } from './bin/update/binupdate.component';

import { DriverCreateComponent } from './driver/create/drivercreate.component';
import { DriverUpdateComponent } from "./driver/update/driverupdate.component";

import { RequestCreateComponent } from "./request/create/requestcreate.component";
import { RequestUpdateComponent } from "./request/update/requestupdate.component";



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adminrequest', component: AdminComponent },

  { path: 'adminbin', component: AdminComponent },
  { path: 'admindriver', component: AdminComponent },
  
  { path: 'bincreate', component: BinCreateComponent },
  { path: 'binupdate', component: BinUpdateComponent },
  
  { path: 'drivercreate', component: DriverCreateComponent },
  { path: 'driverupdate', component: DriverUpdateComponent },

  { path: 'requestcreate', component: RequestCreateComponent },
  { path: 'requestupdate', component: RequestUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, AdminComponent, BinCreateComponent, BinUpdateComponent,  DriverCreateComponent, DriverUpdateComponent, RequestCreateComponent, RequestUpdateComponent ];
