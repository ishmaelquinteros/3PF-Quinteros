import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { LoginServiceService } from 'src/app/Login/Service/login-service.service';
import { UserService } from 'src/app/Users/Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private logUser: UserService, router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.logUser.isAdmin.pipe(
        take(1),map((isAdmi: boolean) => isAdmi)); 
      }
}
