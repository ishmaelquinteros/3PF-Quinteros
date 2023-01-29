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
  
}
