import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType , OnInitEffects, OnRunEffects, EffectNotification } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { Router } from '@angular/router';
// rxjs
import { Observable, of } from 'rxjs';
import { pluck, switchMap, map, catchError, concatMap, takeUntil, tap } from 'rxjs/operators';
import { ProductModel, Product } from '../../../products/models/product.model';

import { ProductService } from './../../../products/services/product.service';


@Injectable()
export class PoductsEffects implements OnInitEffects, OnRunEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private productService: ProductService
    ) {
        console.log('[PRODUCTS EFFECTS]');
    }

    getProducts$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.getProducts),
            switchMap(action =>
                this.productService
                .getProducts()
                .pipe(
                    map(products => {
                      console.log('Products! ', products);
                      return ProductsActions.getProductsSuccess({ products });
                    }),
                    catchError(error => of(ProductsActions.getProductsError({ error })))
                )
            )
        )
    );

    getProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProduct),
      pluck('productId'),
      switchMap(productId =>
        this.productService
        .getProduct(productId)
            .pipe(
                map(product => ProductsActions.getProductSuccess({ product })),
                catchError(error => of(ProductsActions.getProductError({ error })))
        )
      )
    )
  );

  updateProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      pluck('product'),
      concatMap((product: ProductModel) =>
        this.productService
          .editProduct(product)
          .pipe(
            map(updatedProduct => {
                this.router.navigate(['/admin/products']); // ? SAME
                return ProductsActions.updateProductSuccess({ product: updatedProduct });
            }),
            catchError(error => of(ProductsActions.updateProductError({ error })))
        )
      )
    )
  );

  createProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      pluck('product'),
      concatMap((product: ProductModel) =>
      this.productService
          .addProduct(product)
          .pipe(
            map(createdProduct => {
                this.router.navigate(['/home']); // ? NOT HOMR
                return ProductsActions.createProductSuccess({ product: createdProduct });
            } ),
            catchError(error => of(ProductsActions.createProductError({ error })))
        )
      )
    )
  );

  deleteProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
        ofType(ProductsActions.deleteProduct),
        pluck('product'),
        concatMap((product: ProductModel) =>
        this.productService
        .deleteProduct(product.id)
        .then(() => {
          return ProductsActions.getProductSuccess({ product });
        })
        .catch(error => ProductsActions.getProductError({ error }))
        )
    )
    );
     // Implement this interface to dispatch a custom action after the effect has been added.
    // You can listen to this action in the rest of the application
    // to execute something after the effect is registered.
    ngrxOnInitEffects(): Action {
      console.log('ngrxOnInitEffects is called');
      return { type: '[ProductsEffects]: Init' };
  }

  // Implement the OnRunEffects interface to control the lifecycle
  // of the resolved effects.
  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>) {
    return resolvedEffects$.pipe(
      tap(val => console.log('ngrxOnRunEffects:', val)),
      takeUntil(this.actions$.pipe(ofType(ProductsActions.createProduct)))
    );
  }
}


