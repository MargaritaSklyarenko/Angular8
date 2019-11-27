import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

// ngrx
import { Store, select } from '@ngrx/store';
import { AppState, selectProductsData } from './../../core/@ngrx';
import * as RouterActions from './../../core/@ngrx/router/router.actions';

// rxjs
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';


import { checkStore } from './check-store.function';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: ProductService
})
export class ProductExistsGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return checkStore(this.store).pipe(
      switchMap(() => {
        const id = +route.paramMap.get('productID');
        return this.hasProduct(id);
      })
    );
  }

  private hasProduct(id: number): Observable<boolean> {
    return this.store.pipe(
      select(selectProductsData),
      map(products => !!products.find(product => product.id === id)),
      tap(result => {
        if (!result) {
          this.store.dispatch(RouterActions.go({ path: ['/home'] }));
        }
      }),
      take(1)
    );
  }
}
