import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../Service/login-service.service';
@Component({
  selector: 'app-vista-inicio',
  templateUrl: './vista-inicio.component.html',
  styleUrls: ['./vista-inicio.component.css']
})
export class VistaInicioComponent implements OnInit {
  userID: string = "1";

  constructor(
    private loginService: LoginServiceService, private router: Router
  ) { }

  ngOnInit(): void {
  const data = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
      }
    
    this.loginService.login(data).subscribe (respuesta => {(
      console.log(respuesta),
      this.loginService.setToken(JSON.stringify(respuesta)),
      this.loginService.obtenerUsuario(this.userID).subscribe(_ => {
        this.router.navigate(['/app'])})    
    )})};

}
