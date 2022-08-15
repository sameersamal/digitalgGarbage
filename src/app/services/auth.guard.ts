import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router)    { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | UrlTree {
         let url: string = state.url;
             return this.checkLogin(url);
         }
   
         checkLogin(url: string): any | UrlTree {
            console.log("Url: " + url)
            let val = localStorage.getItem('isUserLoggedIn');
   
            if(val != null && val == "true"){
               if(url == "/login")
                  this.router.parseUrl('/login');
               else 
                  return true;
            } else {
               return this.router.parseUrl('/login');
            }
         }
  
}
