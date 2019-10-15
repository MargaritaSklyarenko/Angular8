import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumPipe } from '../shared/sum.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    SumPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SumPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
