import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType , OnInitEffects, OnRunEffects, EffectNotification } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import * as RouterActions from './../router/router.actions';
// rxjs
import { Observable, of } from 'rxjs';
import { pluck, switchMap, map, catchError, concatMap, takeUntil, tap } from 'rxjs/operators';
import { ProductModel, Product } from '../../../products/models/product.model';

import { ProductService } from './../../../products/services/product.service';


@Injectable()
export class ProductsEffects implements OnInitEffects, OnRunEffects {
    constructor(
        private actions$: Actions,
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
                    map(products => ProductsActions.getProductsSuccess({ products })),
                    catchError(error => of(ProductsActions.getProductsError({ error })))
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
                return ProductsActions.createProductSuccess({ product: createdProduct });
            } ),
            catchError(error => of(ProductsActions.createProductError({ error })))
        )
      )
    )
  );

  createUpdateProductSuccess$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.createProductSuccess, ProductsActions.updateProductSuccess),
      map(action =>
        RouterActions.back()
      )
    );
  });


  deleteProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
        ofType(ProductsActions.deleteProduct),
        pluck('product'),
        concatMap((product: ProductModel) =>
        this.productService
          .deleteProduct(product.id)
          .then(() => {
            return ProductsActions.deleteProductSuccess({ product });
          })
          .catch(error => ProductsActions.deleteProductError({ error }))
        )
      )
    );

    ngrxOnInitEffects(): Action {
      console.log('ngrxOnInitEffects is called');
      return { type: '[ProductsEffects]: Init' };
    }

    ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>) {
      return resolvedEffects$.pipe(
        tap(val => console.log('ngrxOnRunEffects:', val))
    );
  }
}


