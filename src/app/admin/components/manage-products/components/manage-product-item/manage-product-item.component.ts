import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-manage-product-item',
  templateUrl: './manage-product-item.component.html',
  styleUrls: ['./manage-product-item.component.css']
})

export class ManageProductItemComponent {
  @Input() product: ProductModel;
  @Output() editProduct = new EventEmitter<ProductModel>();
  @Output() deleteProduct = new EventEmitter<ProductModel>();

  constructor() { }

  onEditProduct() {
    this.editProduct.emit(this.product);
  }

  onDeleteProduct() {
    this.deleteProduct.emit(this.product);
  }
}
