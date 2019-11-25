// @Ngrx
import { Store } from '@ngrx/store';
import { AppState } from './../@ngrx';
import * as RouterActions from './../@ngrx/router/router.actions';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanLoad, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanLoad {
  constructor(
    private authorizationService: AuthorizationService,
    private store: Store<AppState>
    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAdmin();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
    return this.isAdmin();
  }

  isAdmin() {
    if (this.authorizationService.isAdmin) {
      return true;
    }
    this.store.dispatch(RouterActions.go({
      path: ['/login']
    }));

    return false;
  }
}

