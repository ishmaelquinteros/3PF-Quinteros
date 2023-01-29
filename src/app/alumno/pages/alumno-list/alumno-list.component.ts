import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoEditComponent } from '../alumno-edit/alumno-edit.component';
import { AlumnoVerComponent } from '../alumno-ver/alumno-ver.component';
import { AlumnosService } from 'src/app/Core/Services/alumnos.service';
import { Alumnos } from 'src/app/Core/Models/i-alumnos';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {
  
  public alumnos$: Observable<Alumnos[]>;
  
  mensaje: string = "";
  displayedColumns = ["id", "nombre", "apellido", "mail", "estado", "editar", "eliminar", "ver cursos"]
  
  idControl = new FormControl('',[Validators.minLength(1), Validators.pattern("^[0-9]+")])
  nombreControl = new FormControl('',[Validators.minLength(4), Validators.pattern("[a-zA-Z]*")])
  apellidoControl = new FormControl('',[Validators.minLength(4),Validators.pattern("[a-zA-Z]*")])
  mailControl = new FormControl('',[Validators.email]);

  estudiantesForm = new FormGroup({
    id: this.idControl,
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    mail: this.mailControl,
  })
  panelOpenState = false;

  onSubmit(){
    if (this.estudiantesForm.valid){
      this.alumnoService.agregarAlumno(
        {
        id: this.idControl.value!,  
        nombres: this.nombreControl.value!,
        apellido: this.apellidoControl.value!,
        email: this.mailControl.value!,
        estado: true,
        curso: []  
      })
      this.alumnos$ = this.alumnoService.getAlumnosApi()
      this.estudiantesForm.reset();
      this.mensaje="";
    } else {
      this.mensaje = "existen campos inválidos";
    }      
  }

  constructor(
    private dialogService: MatDialog,
    private alumnoService: AlumnosService 
  ) { 
    this.alumnos$ = this.alumnoService.getAlumnosApi();
  }

  ngOnInit(): void {
    this.alumnos$ = this.alumnoService.alumno$;
  }

  borrarEstudiante(alumno : Alumnos){
    this.alumnoService.eliminarAlumno(alumno)
  }

  editEstudiante(alumno: Alumnos){
    const dialog = this.dialogService.open(AlumnoEditComponent, {data: alumno})

    dialog.afterClosed().subscribe((data)=>{
      this.alumnoService.editarAlumno(data)
    })
  }
  
  verCursos(alumno: Alumnos){
    const dialog = this.dialogService.open(AlumnoVerComponent, {data: alumno})

    dialog.afterClosed().subscribe((data)=>{
      console.log(data);
      // this.estudiantes = this.estudiantes.map((estudiante)=> estudiante.id === alumno.id ? {
      //   ...estudiante, ...data} : estudiante)
    })
  }
  cambiarEstado(alumno : Alumnos){
    alumno.estado = !alumno.estado;
    this.alumnoService.estadoAlumno(alumno)
}

}

