import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersItemComponent, OrdersListComponent } from './components';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OrdersItemComponent,
    OrdersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    OrdersListComponent
  ]
})
export class OrdersModule { }
