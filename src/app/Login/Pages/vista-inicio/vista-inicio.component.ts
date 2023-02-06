import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Core/Models/i-user';
import { LoginServiceService } from '../../Service/login-service.service';
@Component({
  selector: 'app-vista-inicio',
  templateUrl: './vista-inicio.component.html',
  styleUrls: ['./vista-inicio.component.css']
})
export class VistaInicioComponent implements OnInit {
  
  opcionSeleccionado: any;
  
  
  
  public formulario: FormGroup;
  email!: string;
  password!: string;

  tokenOK: boolean = false;

  public User$: Observable<any> | undefined;

  constructor(
    private loginService: LoginServiceService, private router: Router
  ) { 
    this.formulario = new FormGroup({
      email: new FormControl('eve.holt@reqres.in', [Validators.required, Validators.email]),
      password: new FormControl('cityslicka', [Validators.required]),
    });
  }

  FormUsuario = new FormControl()

  formUser = new FormGroup({
    user: this.FormUsuario
  })
  
  login(){
    const user = {email: this.formulario.get('email')?.value, 
    password: this.formulario.get('password')?.value }
    this.loginService.login(user).subscribe((respuesta) => {(
    this.tokenOK = true,
      this.loginService.setToken(JSON.stringify(respuesta)),
      this.User$ = this.loginService.obtenerUsuarios()
    )})
  }
  
  capturar() {
  const idUser = this.FormUsuario.value;
  this.loginService.obtenerUsuarioId(idUser).subscribe(_ => {
    this.router.navigate(['/app'])})
  }
    
  ngOnInit() {}
      

}
