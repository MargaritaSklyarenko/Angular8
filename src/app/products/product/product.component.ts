import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../shared/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input () product: ProductModel;
  @Output() buyProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  onBuyProduct(): void {
    this.buyProduct.emit(this.product);
  }
}
