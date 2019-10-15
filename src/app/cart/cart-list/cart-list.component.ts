import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { CartModel } from '../cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  componentName = 'Shopping cart';
  carts: Array<CartModel> = [];

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.carts = this.cartService.getCarts();
  }

  onRemoveCart(cart: CartModel) {
    this.cartService.deleteCart(cart);
  }

  onAddCart(cart: CartModel) {
    this.cartService.addCart(cart);
  }
}
