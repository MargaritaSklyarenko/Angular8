// @NgRx
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './products.reducer';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productsReducer)
  ]
})
export class ProductsStoreModule { }
