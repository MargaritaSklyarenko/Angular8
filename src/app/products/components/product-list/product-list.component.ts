// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, selectProductsData, selectProductsError } from './../../../core/@ngrx';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';

// rxjs
import { Observable } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductModel, Product } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products$: Observable<ReadonlyArray<Product>>;
  productsError$: Observable<Error | string>;

  constructor(
    public cartService: CartService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(selectProductsData));
    this.productsError$ = this.store.pipe(select(selectProductsError));
  }

  ngOnDestroy() {
    console.log('Destroying product list');
  }

  onAddToCartProduct(product: ProductModel): void {
    if (product.isAvailable) {
      console.log(`Thanks for ordering ${product.productName}`);
      this.cartService.addProduct({item: product, count: 1, price: product.price, name: product.productName});
    } else {
      console.log(`Sorry. ${product.productName} is not currently available`);
    }
  }

  onShowDetails(product: ProductModel): void {
    const link = ['/details', product.id];
    this.store.dispatch(RouterActions.go({
      path: link
    }));
  }
}
