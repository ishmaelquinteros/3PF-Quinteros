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
  
  dniControl = new FormControl('',[Validators.minLength(8), Validators.pattern("^[0-9]+")])
  nombreControl = new FormControl('',[Validators.minLength(4), Validators.pattern("[a-zA-Z]*")])
  apellidoControl = new FormControl('',[Validators.minLength(4),Validators.pattern("[a-zA-Z]*")])
  mailControl = new FormControl('',[Validators.email]);

  estudiantesForm = new FormGroup({
    dni: this.dniControl,
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    mail: this.mailControl,
  })
  panelOpenState = false;

  onSubmit(){
    if (this.estudiantesForm.valid){
      console.log(this.estudiantesForm);
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
    console.log(this.alumnos$)
  }

  borrarEstudiante(alumno : Alumnos){
    console.log(alumno)
    //this.estudiantes = this.estudiantes.filter((estudiante) => estudiante.id !== alumno.id)
  }

  editEstudiante(alumno: Alumnos){
    const dialog = this.dialogService.open(AlumnoEditComponent, {data: alumno})

    dialog.afterClosed().subscribe((data)=>{
      console.log(data);
      //this.alumnos$ = this.estudiantes.map((estudiante)=> estudiante.id === alumno.id ? {
      //  ...estudiante, ...data} : estudiante)
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
  cambiarEstado(estudiante : Alumnos){
    //estudiante.estado = !estudiante.estado;
    //alert("Cambiar el estado del alumno" + " " + estudiante.nombre + " " + estudiante.apellido)
}

}

