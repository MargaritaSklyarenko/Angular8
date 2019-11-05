import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services';
import { CartModel } from '../../models';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  componentName = 'Shopping cart';
  carts: Array<CartModel> = [];
  fields = ['name', 'count', 'price'];

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
