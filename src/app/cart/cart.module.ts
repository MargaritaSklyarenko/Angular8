import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent, CartListComponent } from './components';

@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
