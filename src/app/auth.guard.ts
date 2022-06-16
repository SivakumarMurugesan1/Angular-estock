import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route : Router,
    private authService : AuthService
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.authService.isUserLoggedIn()) {
        console.log("User/Admin is logged In")
        return true;
      }
      else {
        console.log("User/Admin is not logged In");
        alert("Please login and continue");
        this.route.navigate(['login']);
        return false;

      }
    }
  
}
