import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  isLoggedIn = false;
  isAdmin: boolean

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(admin: boolean = true): void {
    this.isAdmin = admin;
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
