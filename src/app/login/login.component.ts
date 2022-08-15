import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: any;
  userPassword: any;
  loginformData: any;

   constructor(private authService : AuthenticationService, private router : Router) { }


   ngOnInit() {
      this.loginformData = new FormGroup({
         userName: new FormControl("admin"),
         userPassword: new FormControl("admin"),
      });
   }

   onClickSubmit(data: any) {
      this.userName = data.userName;
      this.userPassword = data.userPassword;

      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.userPassword);

      this.authService.login(this.userName, this.userPassword)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
      
           if(data) this.router.navigate(['/adminrequest']); 
      });
   }

  //  ngOnInit() {
  //     this.loginformData = new FormGroup({
  //        userName: new FormControl("admin"),
  //        userPassword: new FormControl("admin"),
  //     });
  //  }

  //  onClickSubmit(loginformData: any) {
  //     this.userName = loginformData.userName;
  //     this.userPassword = loginformData.userPassword;

  //     console.log("Login page: " + this.userName);
  //     console.log("Login page: " + this.userPassword);

  //     this.authService.login(this.userName, this.userPassword)
  //        .subscribe( (data: string) => { 
  //           console.log("Is Login Success: " + data); 
  //           this.authService.isUserLoggedIn == true;
  //           if(data) {
  //             this.router.navigate(['/dashboard']); 
  //           }
  //           else {
  //             this.router.navigate(['/login']); 
  //           }
  //     });
  //  }

}
