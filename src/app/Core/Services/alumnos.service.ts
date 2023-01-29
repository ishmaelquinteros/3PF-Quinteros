import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, take, throwError } from 'rxjs';
import { Alumnos } from '../Models/i-alumnos'
@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private UrlApi = "https://63c720b5d307b76967476444.mockapi.io/app/Alumnos";
  public alumno$: Observable<Alumnos[]>;
  private alumnos = new BehaviorSubject<Alumnos[]>([]);

  constructor(
    private httpClient: HttpClient
  ) { 
    this.alumno$ = this.alumnos.asObservable();
    
    this.getAlumnosApi().subscribe(alumno => {
      this.alumnos.next(alumno);
    });
  }

  getAlumnosApi(): Observable<Alumnos[]>{
    return this.httpClient.get<Alumnos[]>(this.UrlApi, {
      headers : new HttpHeaders ({
        'content-type' : 'application/json'
      })
      }
    ).pipe(catchError(err => throwError(() => new Error('Error!'))));
  }    
  
  eliminarAlumno(alumno: Alumnos) {
  
    this.httpClient.delete(`${this.UrlApi}/${alumno.id}`).subscribe(_ => {
      let nuevaLista = this.alumnos.getValue().filter( p => p.id !== alumno.id);
      this.alumnos.next(nuevaLista);
    });
  }

  agregarAlumno(alumno: Alumnos) {
    this.httpClient.post(`${this.UrlApi}`, alumno).subscribe({
      next: _ => {
        let nuevaLista = this.alumnos.getValue();
        nuevaLista.push(alumno);
        this.alumnos.next(nuevaLista);
      },
      error: _ => {
        alert('Ocurrio un error');
      }
    });
  }

  editarAlumno(alumno: Alumnos) {
    this.httpClient.put(`${this.UrlApi}/${alumno.id}`, alumno).subscribe(_ => {
      let nuevaLista = this.alumnos.getValue().map(alumn => alumn.id === alumno.id ? alumno : alumn);
      this.alumnos.next(nuevaLista);
    });
  }

  estadoAlumno(alumno: Alumnos){
    this.httpClient.put(`${this.UrlApi}/${alumno.id}`, alumno).subscribe(_ => {
      let nuevaLista = this.alumnos.getValue().map(alumn => alumn.id === alumno.id ? alumno : alumn);
      this.alumnos.next(nuevaLista);
    })
  }

}
