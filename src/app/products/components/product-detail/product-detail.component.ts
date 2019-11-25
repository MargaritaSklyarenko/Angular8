// @NgRx
import { Store, select } from '@ngrx/store';
import { AppState, selectSelectedProductByUrl } from './../../../core/@ngrx';
import * as ProductActions from './../../../core/@ngrx/products/products.actions';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductModel, Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: ProductModel;
  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(
    // public productService: ProductService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    const observer = {
      next: product => {
        if (product) {
          this.product = {...product} as ProductModel;
        } else {
          this.product = new ProductModel();
        }
  
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('Stream is completed');
      }
    };

    this.store
      .pipe(
        select(selectSelectedProductByUrl),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(observer);
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
