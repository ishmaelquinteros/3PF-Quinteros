import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { User } from 'src/app/Core/Models/i-user';
import { classUser } from 'src/app/Core/Models/user.models';
import { LoginServiceService } from 'src/app/Login/Service/login-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private loginSvc: LoginServiceService,
    private route: Router) {
      if (this.loginSvc.getUserName()){
        this.nombreUsuario = this.loginSvc.getUserName()
      }
      if (this.loginSvc.getUserRol()){
        this.rolUsuario = this.loginSvc.getUserRol()
      }
     
      // this.loginSvc.user$.subscribe((user) => {
      //   if (user) {
      //    this.usuario = new classUser (user.id, user.first_name, user.last_name, user.rol),
      //    this.nombreUsuario = this.usuario.first_name,
      //    this.rolUsuario = this.usuario.rol;
      //   }
      // })
    }

  public usuario!: User;
  public nombreUsuario!: string | null;
  public rolUsuario!: string | null;

  ngOnInit(): void {}
  

  terminarSesion(){
    this.loginSvc.logout();
    this.route.navigate(["/login"])    
  }

}
