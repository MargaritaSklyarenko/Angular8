import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessOrderComponent } from './process-order/process-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProcessOrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProcessOrderModule { }
