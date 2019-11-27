// @NgRx
import { Store, select } from '@ngrx/store';
import { AppState, ProductsState } from './../../../../../core/@ngrx';
import * as ProductActions from './../../../../../core/@ngrx/products/products.actions';
import * as RouterActions from './../../../../../core/@ngrx/router/router.actions';

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/services/product.service';
import { ProductModel, Product } from 'src/app/products/models/product.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-product-list',
  templateUrl: './manage-product-list.component.html',
  styleUrls: ['./manage-product-list.component.css']
})

export class ManageProductListComponent implements OnInit {
  products: Observable<ProductModel[]>;

  constructor(
    private store: Store<AppState>,
    public productService: ProductService,
    private router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onEditProduct(product: ProductModel): void {
    const link = ['./edit', product.id];
    // this.router.navigate(link, {relativeTo: this.activatedRoute});
    this.store.dispatch(RouterActions.go({
      path: link,
      queryParams: {relativeTo: this.activatedRoute}
    }));

  }

  onAddProduct(): void {
    const link = ['./add'];
    // this.router.navigate(link, {relativeTo: this.activatedRoute});
    this.store.dispatch(RouterActions.go({
      path: link,
      queryParams: {relativeTo: this.activatedRoute}
    }));
  }

  onDeleteProduct(product: ProductModel): void {
    // Option for Observable method
    // this.productService.deleteProduct(product.id).subscribe(
    //   () => this.products = this.productService.getProducts()
    // );

    const productToDelete: Product = { ...product };
    this.store.dispatch(ProductActions.deleteProduct({ product: productToDelete }));

    // this.productService
    //   .deleteProduct(product.id)
    //   .then(() => (this.products = this.productService.getProducts()))
    //   .catch(err => console.log(err));
  }
}
