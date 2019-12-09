import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessOrderComponent } from './process-order/process-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorsModule } from '../shared/validators/validators.module';

@NgModule({
  declarations: [ProcessOrderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidatorsModule
  ]
})
export class ProcessOrderModule { }
