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
  
  private ultimoID!: string
  
  mensaje: string = "";
  displayedColumns = ["id", "nombre", "apellido", "mail", "estado", "editar", "eliminar", "ver cursos"]
  
  nombreControl = new FormControl('',[Validators.minLength(4), Validators.pattern("[a-zA-Z]*")])
  apellidoControl = new FormControl('',[Validators.minLength(4),Validators.pattern("[a-zA-Z]*")])
  mailControl = new FormControl('',[Validators.email]);

  estudiantesForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    mail: this.mailControl,
  })

  panelOpenState = false;
  
  constructor(
    private dialogService: MatDialog,
    private alumnoService: AlumnosService 
  ) { 
    //this.alumnos$ = this.alumnoService.getAlumnosApi();
    this.alumnos$ = this.alumnoService.alumno$;
  }

  ngOnInit(): void {}

  onSubmit(){
    if (this.estudiantesForm.valid){
      this.alumnoService.agregarAlumno(
        {
        id: this.ultimoID,  
        nombres: this.nombreControl.value!,
        apellido: this.apellidoControl.value!,
        email: this.mailControl.value!,
        estado: true,
        cursos: {'idCurso':"",'nombreCurso':""}
      })
      this.alumnos$ = this.alumnoService.getAlumnosApi()
      this.estudiantesForm.reset();
      this.mensaje="";
      this.panelOpenState = false;
    } else {
      this.mensaje = "existen campos inválidos";
    }      
  }

  borrarEstudiante(alumno : Alumnos){
    this.alumnoService.eliminarAlumno(alumno)
    this.alumnos$ = this.alumnoService.getAlumnosApi();
  }

  editEstudiante(alumno: Alumnos){
    const dialog = this.dialogService.open(AlumnoEditComponent, {data: alumno})

    dialog.afterClosed().subscribe((data)=>{
      this.alumnoService.editarAlumno(data)
    })
  }
  
  verCursos(alumno: Alumnos){
    const dialog = this.dialogService.open(AlumnoVerComponent, {data: alumno})

    // dialog.afterClosed().subscribe( (alumno) =>{
    //   window.alert(`Se agrego el curso ${ alumno.cursos}  al alumno ${alumno.nombre}`)
    // })
  }
  cambiarEstado(alumno : Alumnos){
    alumno.estado = !alumno.estado;
    this.alumnoService.editarAlumno(alumno)
}

}

