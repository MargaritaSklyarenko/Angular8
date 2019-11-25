import { Injectable } from '@angular/core';

// @ngrx
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import {
  selectProductsData,
  selectProductsError,
  selectSelectedProductByUrl
} from './products.selectors';
import * as ProductsActions from './../../../core/@ngrx/products/products.actions';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';

// rxjs
import { Observable } from 'rxjs';

import { Product, ProductModel } from '../../../products/models/product.model';
import { NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade {
  products$: Observable<ReadonlyArray<Product>>;
  productsError$: Observable<Error | string>;
  selectedProductByUrl$: Observable<ProductModel>;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.pipe(select(selectProductsData));
    this.productsError$ = this.store.pipe(select(selectProductsError));
    this.selectedProductByUrl$ = this.store.pipe(select(selectSelectedProductByUrl));
  }

  createTask(props: { product: Product }) {
    this.store.dispatch(ProductsActions.createProduct(props));
  }

  updateTask(props: { product: Product }) {
    this.store.dispatch(ProductsActions.updateProduct(props));
  }

  deleteTask(props: { product: Product }) {
    this.store.dispatch(ProductsActions.deleteProduct(props));
  }

  goTo(props: {
    path: any[];
    queryParams?: object;
    extras?: NavigationExtras;
  }) {
    this.store.dispatch(RouterActions.go(props));
  }
}
