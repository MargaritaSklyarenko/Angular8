import * as RouterActions from './../../../../core/@ngrx/router/router.actions';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';
import { map, catchError, take } from 'rxjs/operators';
import { ProductService } from 'src/app/products/services/product.service';
import { ProductsFacade } from 'src/app/core/@ngrx';

@Injectable({
  providedIn: 'root'
})
export class EditResolveGuard implements Resolve<ProductModel> {

  constructor(
    public productService: ProductService,
    private productsFacade: ProductsFacade
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {
    if (!route.paramMap.has('id')) {
      return of(new ProductModel(null, ''));
    }

    const id = +route.paramMap.get('id');

    return this.productService.getProduct(id).pipe(
      map((product: ProductModel) => {
        if (product) {
          return product;
        } else {
          this.productsFacade.goTo({ path: ['/home'] });
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.productsFacade.goTo({ path: ['/home'] });
        return of(null);
      })
    );
  }
}
