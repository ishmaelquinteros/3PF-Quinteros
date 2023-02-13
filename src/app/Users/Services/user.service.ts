import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { User } from 'src/app/Core/Models/i-user';
import { classUser } from 'src/app/Core/Models/user.models';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private http: HttpClient) { 
    
  }
  
  private Admin = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<User | null>(null);
  public user$ = this.user.asObservable();

  get isAdmin(): Observable<boolean>{
    return this.Admin.asObservable()
 } 

  obtenerUsuarios(){
    return this.http.get<User>("https://63d9687fbaa0f79e09bb9ed7.mockapi.io/app/users/")
  
  }

  obtenerUsuarioId(id: string){
    return this.http.get<User>(`https://63d9687fbaa0f79e09bb9ed7.mockapi.io/app/users/${id}`)
    .pipe(
       map(data => {
        new classUser(data.id,data.first_name, data.last_name,data.rol),      
        localStorage.setItem('userNombre', data.last_name),
        localStorage.setItem('userRol', data.rol);
        if (data.id = "1") {
          this.Admin.next(true)
        }; 
      }),
       catchError((err) => this.handlerError(err)),
       );
  }
  
  handlerError(err: any): Observable<never>{
    let errMensaje = 'Ocurrio un error al obtener los datos'
    if(err){
      errMensaje = `Error: code ${err.message}`;
    }
    window.alert(errMensaje);
    return throwError(errMensaje);
  }


  getUserName(){
    return localStorage.getItem('userNombre')
  }
  getUserRol(){
    return localStorage.getItem('userRol')
  }

  agregarUsuario(user: User) {

    throw new Error('Method not implemented.');
  }

}
