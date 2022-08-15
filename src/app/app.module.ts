import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BinCreateComponent } from './bin/create/bincreate.component';
import { BinUpdateComponent } from './bin/update/binupdate.component';

import { DriverCreateComponent } from './driver/create/drivercreate.component';
import { DriverUpdateComponent } from './driver/update/driverupdate.component';

import { RequestCreateComponent } from './request/create/requestcreate.component';
import { RequestUpdateComponent } from './request/update/requestupdate.component';
import { AuthGuard } from './services/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    AdminComponent,
    
    BinCreateComponent,
    BinUpdateComponent,
    DriverCreateComponent,
    DriverUpdateComponent,

    RequestCreateComponent,
    RequestUpdateComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
