import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from './user';
import { TokenService } from '../token/token.service';
import * as jwt_decoder from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private userSubject = new Subject<User>();


constructor( private tokenService: TokenService) {

  this.tokenService.hasToken() && this.decodeAndNotify();

 }

setToken( token: string) {

  this.tokenService.setToken(token);
  this.decodeAndNotify();

}
  decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decoder(token) as User;
    this.userSubject.next(user);
  }

getUser() {

  return this.userSubject.asObservable();

}

}
