import { Component, Inject, Input, OnInit } from '@angular/core';
import { CursosService } from 'src/app/Core/Services/cursos.service';
import { AlumnosService } from 'src/app/Core/Services/alumnos.service';
import { Alumnos } from 'src/app/Core/Models/i-alumnos';
import { AlumnoCurso } from 'src/app/Core/Models/i-alumnos';
import { Observable } from 'rxjs';
import { Cursos } from 'src/app/Core/Models/i-cursos';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { classAlumno } from 'src/app/Core/Models/alumno.model';

@Component({
  selector: 'app-alumno-ver',
  templateUrl: './alumno-ver.component.html',
  styleUrls: ['./alumno-ver.component.css']
})
export class AlumnoVerComponent implements OnInit {


public alumno!: Alumnos;

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
  //   this.alumno = new classAlumno(
  //        data.id, 
  //        data.nombres, 
  //        data.apellido, 
  //        data.estado,
  //        data.email,
  //        data.cursos.idCurso,
  //        data.cursos.nombreCurso,
  // )
}

   datosCurso(idCurso: string, nomCurso:string){
    const dataCurso = {
      'idCurso' : idCurso,
      'nombreCurso': nomCurso
    }  
    this.agregarCursoAlumno(dataCurso)
  }
   
   agregarCursoAlumno(data: AlumnoCurso){
   //this.alumno.cursos.push([{data}]);
   //this.alum.cursos
   this.alumno.cursos = data;
   this.alumnoService.editarAlumno(this.alumno)
  }
  
  Desinscribir(){
      const data = {
        'idCurso': "",
        'nombreCurso':""
      }
    this.alumno.cursos = data;
    this.alumnoService.editarAlumno(this.alumno);  
    }

  Cerrar() {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {}

}


