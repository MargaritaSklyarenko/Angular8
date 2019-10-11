import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../product/product';
import { CartService } from '../card/cart.service';

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
      this.cartService.addCard(this.product);
    } else {
      console.log(`Sorry. ${this.product.name} is not currently available`);
    }
  }
}
