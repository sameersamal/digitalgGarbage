import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Expense Manager';
  isUserLoggedIn = false;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.isUserLoggedIn = false;
    
     let storeData = localStorage.getItem("isUserLoggedIn");
     console.log("StoreData: " + storeData);

     if( storeData != null && storeData == "true")
        this.isUserLoggedIn = true;
     else
        this.isUserLoggedIn = false;
  }
}


// export class AppComponent {
//   title = 'digitalgGarbage';

//   isUserLoggedIn: any;
//   router: any;

//   constructor(private authService: AuthenticationService) {}

//   ngOnInit() {
//      let storeData = localStorage.getItem("isUserLoggedIn");
//      console.log("StoreData: " + storeData);

//      if( storeData != null && storeData == "true") {
//         if(this.isUserLoggedIn = true) {
//           const userName = this.authService.isUserLoggedIn.userName;
//           const userPassword = this.authService.isUserLoggedIn.userPassword;
//           localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 
//           this.router.navigate(['/dashboard']);
//         }
//         if(this.isUserLoggedIn = false) {
//           const userPassword = this.authService.isUserLoggedIn.userPassword;
//           localStorage.removeItem('isUserLoggedIn');
//           this.router.navigate(['/login']);
//         }
//     }   
//   }