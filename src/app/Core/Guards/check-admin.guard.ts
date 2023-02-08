import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/Login/Service/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class CheckAdminGuard implements CanActivate {
  constructor(private loginSvc: LoginServiceService){}
  
  tipoUsuario!: string | null
  tipoRespuesta!: boolean
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.tipoUsuario = this.loginSvc.getUserRol()
    
    if (this.tipoUsuario !== "ADMINISTRADOR"){
      this.tipoRespuesta = false ;
    }; 
    return this.tipoRespuesta;
  } 
  
}
