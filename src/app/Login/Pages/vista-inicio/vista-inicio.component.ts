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
  
  public formulario: FormGroup;

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

  controlUsuario = new FormControl()

  formUser = new FormGroup({
    user: this.controlUsuario
  })
  
  login(){
    const user = {email: this.formulario.get('email')?.value, 
    password: this.formulario.get('password')?.value }
    this.loginService.login(user).subscribe((respuesta) => {(
      this.loginService.setToken(JSON.stringify(respuesta)),
      this.User$ = this.loginService.obtenerUsuarios(),
      this.tokenOK = true
    )})
  }
  
  capturar() {
  const idUser = this.controlUsuario.value;
  this.loginService.obtenerUsuarioId(idUser).subscribe(_ => {
    this.router.navigate(['/app'])})
  }
    
  ngOnInit() {
    if (!this.loginService.isLogged){
      this.formulario.disable();
      this.formUser.disable(); 
      alert('sesion iniciada')
    }
    }
      

}
