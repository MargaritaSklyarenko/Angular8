// @Ngrx
import { ProductsFacade } from './../../../core/@ngrx';

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
  products$: Observable<ReadonlyArray<Product>>;
  productsError$: Observable<Error | string>;
  products: Observable<ProductModel[]>;
  errMessage = '';

  constructor(
    // public productService: ProductService,
    public cartService: CartService,
    public productsFacade: ProductsFacade
  ) { }

  ngOnInit() {
    this.products$ = this.productsFacade.products$;
    this.productsError$ = this.productsFacade.productsError$;
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
    this.productsFacade.goTo({ path: link });
  }
}
