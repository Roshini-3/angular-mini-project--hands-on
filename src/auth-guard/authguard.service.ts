import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLoggedIn = sessionStorage.getItem('email');
      if(isLoggedIn == null || isLoggedIn==''){
        this.router.navigate(['/login'])
      }
      return (isLoggedIn!=null || isLoggedIn!='');
  }
  
}
  