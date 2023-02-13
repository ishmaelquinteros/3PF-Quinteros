import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { User } from 'src/app/Core/Models/i-user';
import { classUser } from 'src/app/Core/Models/user.models';
import { LoginServiceService } from 'src/app/Login/Service/login-service.service';
import { UserService } from 'src/app/Users/Services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private serviceUser: UserService, 
    private serviceLog: LoginServiceService,
    private route: Router) {
      if (this.serviceUser.getUserName()){
        this.nombreUsuario = this.serviceUser.getUserName()
      }
      if (this.serviceUser.getUserRol()){
        this.rolUsuario = this.serviceUser.getUserRol()
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
    this.serviceLog.logout();
    this.route.navigate(["/login"])    
  }

}
