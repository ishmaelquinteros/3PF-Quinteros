import { Component, Inject, Input, OnInit } from '@angular/core';
import { CursosService } from 'src/app/Core/Services/cursos.service';
import { AlumnosService } from 'src/app/Core/Services/alumnos.service';
import { Alumnos } from 'src/app/Core/Models/i-alumnos';
import { AlumnoCurso } from 'src/app/Core/Models/i-alumnos';
import { Observable } from 'rxjs';
import { Cursos } from 'src/app/Core/Models/i-cursos';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alumno-ver',
  templateUrl: './alumno-ver.component.html',
  styleUrls: ['./alumno-ver.component.css']
})
export class AlumnoVerComponent implements OnInit {

  
@Input() alumno!: Alumnos;

public cursos$: Observable<Cursos[]>;
public alumno$: Observable<Alumnos[]>;


  constructor(
    public dialogRef: MatDialogRef<AlumnoVerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumnos,
    private cursoService: CursosService,
    private alumnoService: AlumnosService
    ) {
    this.cursos$ = this.cursoService.curso$;
    this.alumno$ = this.alumnoService.alumno$;
    this.alumno = data;
  }

   datosCurso(idCurso: string, nomCurso:string){
    const data = {
      'idCurso' : idCurso,
      'nombreCurso': nomCurso
    }  
    this.agregarCursoAlumno(data)
  }
   
   agregarCursoAlumno(data: AlumnoCurso){
   this.alumno.cursos = data;   
   this.alumnoService.editarAlumno(this.alumno)
  }
  
  Desinscribir(){
      const data = {
        idCurso: "",
        nombreCurso:""
      }
    this.alumno.cursos = data;  
    this.alumnoService.editarAlumno(this.alumno)  
    }
  Cerrar() {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {}

}


