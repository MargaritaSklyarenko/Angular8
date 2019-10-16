import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumPipe } from '../shared/sum.pipe';
import { HighlightDirective } from './highlight.directive';

const items = [SumPipe, HighlightDirective];
@NgModule({
  declarations: [...items],
  imports: [CommonModule],
  exports: [...items]
})
export class SharedModule {}
