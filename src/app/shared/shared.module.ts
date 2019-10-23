import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumPipe } from './pipes/sum.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { BoldBorderDirective } from './directives/bold-border.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

const items = [SumPipe, OrderByPipe, HighlightDirective, BoldBorderDirective];
@NgModule({
  declarations: [...items],
  imports: [CommonModule],
  exports: [...items]
})
export class SharedModule {}
