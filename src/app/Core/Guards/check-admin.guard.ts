import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { LoginServiceService } from 'src/app/Login/Service/login-service.service';
import { UserService } from 'src/app/Users/Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CheckAdminGuard implements CanActivate {
  constructor(private userSvc: UserService){}
  
  tipoUsuario!: string | null
  tipoRespuesta!: boolean
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.userSvc.isAdmin.pipe(take(1),
    map((admin: boolean) => admin));
    
  } 
  
}
