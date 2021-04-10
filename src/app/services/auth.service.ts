import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from '../classes/user';

@Injectable()
export class AuthService {
  private isUserLogged = false;
  @Output() userslogin = new EventEmitter<User>()
  @Output() usersregister = new EventEmitter<User>()
  @Output() userlogout = new EventEmitter()

  constructor(private http : HttpClient) { }

  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization : 'Bearer ' + localStorage.getItem('token')
      }
    );
    return headers;
  }

   isUserLoggedIn() {
    this.isUserLogged = !!localStorage.getItem('token');
    return this.isUserLogged;
  }
 
  logIn(username : string, password: string){
    let user = new User();
    user.email = username;
    user.name = username
   /* alert('metto il token nella localstorage '+username)
    localStorage.setItem('token', username)
    this.userslogin.emit(user);*/

    this.http.post('http://localhost:8080/api/auth/signin',{
      "username":"pippo",
      "password":"megafuffy"
    }).subscribe(
      (payload: any) => {
        localStorage.setItem('token', payload.accessToken)
        this.userslogin.emit(user);
        }
    )

    return true;
  }

  logOut(){
    localStorage.removeItem('token')
    this.userlogout.emit();
  }

  registrazione(username : string, password: string){
    let user = new User();
    user.email = username;
    user.name = username
    localStorage.setItem('token', username)
    this.usersregister.emit(user)
  }

}