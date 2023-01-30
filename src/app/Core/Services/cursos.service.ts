import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Cursos } from '../Models/i-cursos'
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private UrlApi = "https://63c720b5d307b76967476444.mockapi.io/app/Cursos";
  public curso$: Observable<Cursos[]>;
  private cursos = new BehaviorSubject<Cursos[]>([]);

  constructor(
    private httpClient: HttpClient
  ) { 
    this.curso$ = this.cursos.asObservable();
    
    this.getCursosApi().subscribe(curso => {
      this.cursos.next(curso);
  });
}
  getCursosApi(): Observable<Cursos[]> {
    return this.httpClient.get<Cursos[]>(this.UrlApi, {
      headers : new HttpHeaders ({
        'content-type' : 'application/json'
      })
      }
    ).pipe(catchError(err => throwError(() => new Error('Error!'))));
  } 

  eliminarCurso(curso: Cursos) {
    this.httpClient.delete(`${this.UrlApi}/${curso.id}`).subscribe(_ => {
      let nuevaLista = this.cursos.getValue().filter( c => c.id !== curso.id);
      this.cursos.next(nuevaLista);
    });
  }

  agregarCurso(curso: Cursos) {
    this.httpClient.post(`${this.UrlApi}`, curso).subscribe({
      next: _ => {
        let nuevaLista = this.cursos.getValue();
        nuevaLista.push(curso);
        this.cursos.next(nuevaLista);
      },
      error: _ => {
        alert('Ocurrio un error');
      }
    });
  }

  editarCurso(curso: Cursos) {
    this.httpClient.put(`${this.UrlApi}/${curso.id}`, curso).subscribe(_ => {
      let nuevaLista = this.cursos.getValue().map(cur => cur.id === curso.id ? curso : cur);
      this.cursos.next(nuevaLista);
    });
  }


}