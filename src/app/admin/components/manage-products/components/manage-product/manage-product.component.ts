// @NgRx
import { Store } from '@ngrx/store';
import { AppState } from './../../../../../core/@ngrx';
import * as ProductsActions from './../../../../../core/@ngrx/products/products.actions';
import * as RouterActions from './../../../../../core/@ngrx/router/router.actions';

import { Component, OnInit } from '@angular/core';
import { ProductModel, Product } from 'src/app/products/models/product.model';
import { ActivatedRoute } from '@angular/router';

import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  product: ProductModel;
  isNew: boolean;

  constructor(
    private store: Store<AppState>,
    public activatedRoute: ActivatedRoute,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
      this.product = { ...product };
      this.isNew = !!this.product.id;
    });
  }

  onSaveProduct(): void {
    const product = { ...this.product } as Product;
    this.store.dispatch(ProductsActions.updateProduct({ product }));
  }

  onAddProduct(): void {
    const product = { ...this.product } as Product;
    this.store.dispatch(ProductsActions.createProduct({ product }));
  }

  onGoBack(): void {
    this.store.dispatch(RouterActions.go({
      path: ['/admin/products']
    }));
  }
}
