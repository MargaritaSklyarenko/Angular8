import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ProductModel } from '../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input () product: ProductModel;
  @Output() buyProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  onBuyProduct(): void {
    this.buyProduct.emit(this.product);
  }
}
