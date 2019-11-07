import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  isLoggedIn = false;
  isAdmin: boolean;
  redirectUrl: string;

  login(admin: boolean = true): void {
    this.isAdmin = admin;
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
