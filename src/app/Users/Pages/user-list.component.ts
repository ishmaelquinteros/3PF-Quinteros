import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/Core/Models/i-user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { 
    this.user$ = this.userService.obtenerUsuarios()
  }

  ngOnInit(): void {
  }
  public user$: Observable<any>;
  
  private ultimoID!: string;
  
  mensaje: string = "";
  displayedColumns = ["id", "nombre", "apellido", "rol", "editar", "eliminar"];

  first_nameCtrl = new FormControl('',[Validators.minLength(4), Validators.pattern("[a-zA-Z]*")])
  last_nameCtrl = new FormControl('',[Validators.minLength(4),Validators.pattern("[a-zA-Z]*")])
  rolCtrl = new FormControl('Usuario');

  userForm = new FormGroup({
    first_name: this.first_nameCtrl,
    last_name: this.last_nameCtrl,
    rol: this.rolCtrl,
  })
  
  panelOpenState = false;

  onSubmit(){
    if (this.userForm.valid){
      this.userService.agregarUsuario(
        {
        id: this.ultimoID,  
        first_name: this.first_nameCtrl.value!,
        last_name: this.last_nameCtrl.value!,
        rol: this.rolCtrl.value!,
      })
      this.user$ = this.userService.user$
      this.userForm.reset();
      this.mensaje="";
    } else {
      this.mensaje = "existen campos inválidos";
    }      
  }

  editarUser(user: User){

  }

  borrarUser(user: User){

  }
}
