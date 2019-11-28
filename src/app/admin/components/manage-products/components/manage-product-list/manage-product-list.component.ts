// @NgRx
import { Store, select } from '@ngrx/store';
import { AppState,  selectProductsData, selectProductsError } from './../../../../../core/@ngrx';
import * as ProductActions from './../../../../../core/@ngrx/products/products.actions';
import * as RouterActions from './../../../../../core/@ngrx/router/router.actions';

import { Component, OnInit } from '@angular/core';
import { ProductModel, Product } from 'src/app/products/models/product.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-product-list',
  templateUrl: './manage-product-list.component.html',
  styleUrls: ['./manage-product-list.component.css']
})

export class ManageProductListComponent implements OnInit {
  products$: Observable<ReadonlyArray<Product>>;
  productsError$: Observable<Error | string>;

  constructor(
    private store: Store<AppState>,
    public activatedRoute: ActivatedRoute,
    public router: Router
    ) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(selectProductsData));
    this.productsError$ = this.store.pipe(select(selectProductsError));
  }

  onEditProduct(product: ProductModel): void {
    const link = [this.router.url + '/edit', product.id];
    this.store.dispatch(RouterActions.go({
      path: link
    }));
  }

  onAddProduct(): void {
    const link = [this.router.url + '/add'];
    this.store.dispatch(RouterActions.go({
      path: link
    }));
  }

  onDeleteProduct(product: ProductModel): void {
    const productToDelete: Product = { ...product };
    this.store.dispatch(ProductActions.deleteProduct({ product: productToDelete }));
  }
}
