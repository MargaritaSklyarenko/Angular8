import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumPipe } from './pipes/sum.pipe';
import { HighlightDirective } from './directives/highlight.directive';

const items = [SumPipe, HighlightDirective];
@NgModule({
  declarations: [...items],
  imports: [CommonModule],
  exports: [...items]
})
export class SharedModule {}
