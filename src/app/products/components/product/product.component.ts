import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ProductModel } from '../../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input () product: ProductModel;
  @Output() addToCartProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() showProductDetails = new EventEmitter<ProductModel>();

  constructor() { }

  onAddToCartProduct(): void {
    this.addToCartProduct.emit(this.product);
  }

  onShowDetails() {
    this.showProductDetails.emit(this.product);
  }
}
