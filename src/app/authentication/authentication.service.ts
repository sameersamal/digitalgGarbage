import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  isUserLoggedIn: boolean = false;

   login(userName: string, userPassword: string): Observable<any> {
      console.log(userName);
      console.log(userPassword);
      this.isUserLoggedIn = userName == 'admin' && userPassword == 'admin';
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

   return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
   }

   logout(): void {
   this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }

   constructor(private router: Router)    { }

  // logout() {
  //    throw new Error('Method not implemented.');
  // }
  // router: any;
  // isUserLoggedIn: any;

  // login(userName: string, userPassword: string): Observable<any> {
  //    this.isUserLoggedIn = userName == 'admin' && userPassword == 'admin';

  //    return of(this.isUserLoggedIn)
  // }
}

