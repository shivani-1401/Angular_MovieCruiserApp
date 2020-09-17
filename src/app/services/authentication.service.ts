import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public users = [];

  constructor() {
    this.users = [
      {
        username: 'admin',
        password: 'pass'
      },
      {
        username: 'user1',
        password: 'pass1'
      }
    ];
  }

  authenticate(user): any {
    let token;
    const foundUser = this.users.find(u =>
      u.username === user.username
      && u.password === user.password
    );

    if (foundUser) {
      token = user.username;
    }
    return token;
  }

  storeToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }
}


