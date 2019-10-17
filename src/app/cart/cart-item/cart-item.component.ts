import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CartModel } from '../cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input () cart: CartModel;
  @Output() removeCart: EventEmitter<CartModel> = new EventEmitter<CartModel>();
  @Output() addCart: EventEmitter<CartModel> = new EventEmitter<CartModel>();

  constructor() { }

  onRemoveCart(): void {
    this.removeCart.emit(this.cart);
  }

  onAddCart(): void {
    this.addCart.emit(this.cart);
  }
}
