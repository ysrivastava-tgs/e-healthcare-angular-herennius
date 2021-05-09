import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(private router: Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean{
    if(localStorage.getItem('token')!=null && (localStorage.getItem('role')=='Admin' || localStorage.getItem('role')=='ADMIN'))
    return true;
    else if(localStorage.getItem('token')!=null && (localStorage.getItem('role')=='User' || localStorage.getItem('role')=='USER')){
      this.router.navigate(['./']);
      return false;
    }
    else{
      this.router.navigate['./Login'];
      return false;
    }
  }
  
}
