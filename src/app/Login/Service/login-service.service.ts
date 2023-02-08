import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, catchError, map, mergeMap, Observable, take, tap, throwError } from 'rxjs';
import { LoginOk, User } from 'src/app/Core/Models/i-user';
import { classUser } from 'src/app/Core/Models/user.models';
import { JwtHelperService } from '@auth0/angular-jwt';

//const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  // private user = new BehaviorSubject<User | null>(null);
  // public user$ = this.user.asObservable();

  constructor(private http: HttpClient) {
   }

   get isLogged(): Observable<boolean>{
      return this.loggedIn.asObservable()
   } 

  login(data: {email: string; password: string}): Observable<any | void>{
    return this.http.post("https://reqres.in/api/login", data).
    pipe(map ((res => {
      this.setToken(JSON.stringify(res));
      this.loggedIn.next(true);
      return res;
    })
  ));
};

obtenerUsuarios(){
  return this.http.get<User>("https://63d9687fbaa0f79e09bb9ed7.mockapi.io/app/users/")

}
setToken(token: string){
  localStorage.setItem('token', token)
}

checkToken (){
  const userToken = localStorage.getItem('token');
  userToken ? this.loggedIn.next(true) : this.logout()
}

getUserName(){
  return localStorage.getItem('userNombre')
}
getUserRol(){
  return localStorage.getItem('userRol')
}

logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.loggedIn.next(false);
}

obtenerUsuarioId(id: string){
  return this.http.get<User>(`https://63d9687fbaa0f79e09bb9ed7.mockapi.io/app/users/${id}`)
  .pipe(
     map(data => {
      new classUser(data.id,data.first_name, data.last_name,data.rol),      
      localStorage.setItem('userNombre', data.last_name),
      localStorage.setItem('userRol', data.rol)
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
}

