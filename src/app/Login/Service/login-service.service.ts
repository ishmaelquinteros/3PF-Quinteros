import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, catchError, map, mergeMap, Observable, take, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loggedIn = new BehaviorSubject<boolean>(false);


  constructor(private http: HttpClient) {}

   get isLogged(): Observable<boolean>{
      return this.loggedIn.asObservable()
   } 

  login(data: {email: string; password: string}): Observable<any | void>{
    return this.http.post("https://reqres.in/api/login", data).
    pipe(map ((res => {
      this.setToken(JSON.stringify(res));
      this.loggedIn.next(true);
      return res;
    }),catchError((err) => this.handlerError(err)),
  ));
};

setToken(token: string){
  localStorage.setItem('token', token)
}

checkToken (){
  const Token = localStorage.getItem('token');
  Token ? this.loggedIn.next(true) : this.logout()
}

logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.loggedIn.next(false);
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

