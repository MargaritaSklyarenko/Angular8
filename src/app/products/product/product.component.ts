import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../shared/product';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input () product: ProductModel;

  constructor(public cartService: CartService) { }

  onBuy(): void {
    if (this.product.isAvailable) {
      console.log(`Thanks for ordering ${this.product.name}`);
      this.cartService.addCart(this.product);
    } else {
      console.log(`Sorry. ${this.product.name} is not currently available`);
    }
  }
}
