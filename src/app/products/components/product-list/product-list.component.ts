// @Ngrx
import { Store, select } from '@ngrx/store';

import { AppState, ProductsState } from './../../../core/@ngrx';
import * as ProductsActions from './../../../core/@ngrx/products/products.actions';

// rxjs
import { Observable } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ProductService } from '../../services/product.service';
import { ProductModel, Product } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  productsState$: Observable<ProductsState>;
  products: Observable<ProductModel[]>;
  errMessage = '';

  constructor(
    // public productService: ProductService,
    public cartService: CartService,
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit() {
    // this.products = this.productService.getProducts();
    this.productsState$ = this.store.pipe(select('products'));
    this.store.dispatch(ProductsActions.getProducts());
    // Used asynk pipe instead of code below
    // this.productService.getProducts().subscribe(
    //  products => this.products = products,
    //  err => this.errMessage = <any>err
    // );
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
    this.router.navigate(link);
  }
}
