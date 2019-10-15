import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumPipe } from '../shared/sum.pipe';


@NgModule({
  declarations: [
    SumPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SumPipe
  ]
})
export class SharedModule { }
