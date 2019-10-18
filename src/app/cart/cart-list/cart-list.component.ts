import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CartModel } from '../cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  componentName = 'Shopping cart';
  carts: Array<CartModel> = [];

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.carts = this.cartService.getCarts();
  }

  ngOnDestroy() {
    console.log('Destroying cart list component');
  }

  onRemoveCart(cart: CartModel) {
    this.cartService.removeProduct(cart);
  }

  onAddCart(cart: CartModel) {
    this.cartService.addProduct(cart);
  }
}
