// @NgRx
import { Store, select } from '@ngrx/store';
import { AppState, selectSelectedProductByUrl } from './../../../core/@ngrx';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: ProductModel;
  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(
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
    this.store.dispatch(RouterActions.back());
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
