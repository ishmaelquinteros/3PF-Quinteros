import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CursosVerComponent } from '../cursos-ver/cursos-ver.component';
import { CursosEditComponent } from '../cursos-edit/cursos-edit.component';
import { CursosService } from 'src/app/Core/Services/cursos.service';
import { Cursos } from 'src/app/Core/Models/i-cursos';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {
  public cursos$: Observable<Cursos[]>;
  
  private ultimoID!: string
  
  mensaje: string = "";
  
  displayedColumns = ["id", "nombre", "descripcion", "horasTotal", "fechaInicio", 
  "editar", "eliminar", "ver cursos"]

  nombreControl = new FormControl('',[Validators.required, Validators.minLength(4), Validators.pattern("[a-zA-Z]*")])
  descripcionControl = new FormControl('',[Validators.minLength(4),Validators.pattern("[a-zA-Z]*")])
  horasControl = new FormControl(1,[Validators.minLength(2),Validators.pattern("[0-9]*")]);
  fechaControl = new FormControl('', [Validators.required]);
  
  cursosForm = new FormGroup({
    nombre: this.nombreControl,
    descripcion: this.descripcionControl,
    horasTotal: this.horasControl,
    fechaInicio: this.fechaControl
  })
  
  panelOpenState = false;
  
  constructor(
    private dialogService: MatDialog,
    private cursoService: CursosService
  ) {
    this.cursos$ = this.cursoService.curso$;
   }

  ngOnInit(): void {}

  onSubmit(){
    const fechaCurso = new Date(this.fechaControl.value!);

    if (this.cursosForm.valid){ 
      this.cursoService.agregarCurso(
        {
        id: this.ultimoID,  
        nombre: this.nombreControl.value!,
        descripcion: this.descripcionControl.value!,
        horasTotal: this.horasControl.value!,
        fechaInicio: fechaCurso,
        alumnos: {'idAlumno':"", 'nombreAlumno':""}
      })
      this.cursos$ = this.cursoService.getCursosApi()
      this.cursosForm.reset();
      this.mensaje= "";
      this.panelOpenState = false;
    } else {
      this.mensaje = "existen campos inválidos";
    }      
  }

  borrarCurso(curso : Cursos){
    this.cursoService.eliminarCurso(curso)
    this.cursos$ = this.cursoService.getCursosApi();
  }

  editCurso(curso: Cursos){
    const dialog = this.dialogService.open(CursosEditComponent, {data: curso})

    dialog.afterClosed().subscribe((data)=>{
      this.cursoService.editarCurso(data)
    })
  }
  
  verCursos(curso: Cursos){
    const dialog = this.dialogService.open(CursosVerComponent, {data: curso})

    dialog.afterClosed().subscribe((data)=>{
      console.log(data);
     
    })
  }
}
