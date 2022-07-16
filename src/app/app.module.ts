import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BinCreateComponent } from './bin/create/bincreate.component';
import { BinUpdateComponent } from './bin/update/binupdate.component';

@NgModule({
  declarations: [ AppComponent, BinCreateComponent, BinUpdateComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
