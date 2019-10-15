import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ProductModel } from '../shared/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  componentName = 'Shopping cart';
  carts: Array<ProductModel> = [];

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.carts = this.cartService.getCarts();
  }

  onRemove(cart: ProductModel): void {
      this.cartService.deleteCart(cart);
  }
}
