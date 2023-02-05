import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  loggedIn = false;

  logIn() {
    this.loggedIn = true;
  }

  loggedOut() {
    this.loggedIn = false;
  }

  isAdmin() {
    const userIsAdmin = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
    return userIsAdmin;
  }
}
