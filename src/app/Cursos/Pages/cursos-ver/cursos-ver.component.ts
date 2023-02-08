import { Component, Inject, Input, OnInit } from '@angular/core';
import { CursosService } from 'src/app/Core/Services/cursos.service';
import { AlumnosService } from 'src/app/Core/Services/alumnos.service';
import { Alumnos } from 'src/app/Core/Models/i-alumnos';
import { AlumnoCurso } from 'src/app/Core/Models/i-alumnos';
import { Observable } from 'rxjs';
import { CursoAlumno, Cursos } from 'src/app/Core/Models/i-cursos';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cursos-ver',
  templateUrl: './cursos-ver.component.html',
  styleUrls: ['./cursos-ver.component.css']
})
export class CursosVerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CursosVerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cursos,
    private cursoService: CursosService,
    private alumnoService: AlumnosService,
  ) {
    this.cursos$ = this.cursoService.curso$;
    this.alumno$ = this.alumnoService.alumno$;
    this.curso = data;
   }

  public curso!: Cursos;

public cursos$: Observable<Cursos[]>;
public alumno$: Observable<Alumnos[]>;
    
datosCurso(dataId: string, dataNombre:string){
  const dataAlumno = {
    'idAlumno' : dataId,
    'nombreAlumno': dataNombre
  }  
  this.agregarAlumno(dataAlumno)
}
 
 agregarAlumno(data: CursoAlumno){
 
 this.curso.alumnos = data;
 this.cursoService.editarCurso(this.curso)
}

Desinscribir(){
    const data = {
      'idAlumno': "",
      'nombreAlumno':""
    }
  this.curso.alumnos = data;
  this.cursoService.editarCurso(this.curso);  
  }

Cerrar() {
  this.dialogRef.close();
}
  ngOnInit(): void {
  }



}
