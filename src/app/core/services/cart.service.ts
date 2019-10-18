import { Injectable } from '@angular/core';
import { CartModel } from '../../cart/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: Array<CartModel> = [];
  totalQuantity: number;
  totalSum: number;

  constructor() {}

  getCarts(): Array<CartModel> {
    return this.cartProducts;
  }

  addProduct(cart: CartModel): void {
    let isNewItem = true;

    this.cartProducts.forEach(element => {
      if (element.item.name === cart.item.name) {
        isNewItem = false;
        this.increaseQuantity(element, cart.item.price);
      }
    });

    if (isNewItem) {
      this.cartProducts.push(cart);
    }

    this.updateCartData();
  }

  removeProduct(cart: CartModel): void {
    let shouldBeRemoved = false;

    this.cartProducts.forEach(element => {
      if (element.item.name === cart.item.name) {
        this.decreaseQuantity(element, cart.item.price);
        shouldBeRemoved = !element.count;
      }
    });

    if (shouldBeRemoved) {
      this.cartProducts.splice(this.cartProducts.indexOf(cart), 1);
    }

    this.updateCartData();
  }

  removeAllProducts(): void {
    this.cartProducts = [];
    this.updateCartData();
  }

  increaseQuantity(element, price): void {
    element.count++;
    element.itemsPrice += price;
  }

  decreaseQuantity(element, price): void {
    element.count--;
    element.itemsPrice -= price;
  }

  updateCartData(): void {
    this.totalQuantity = this.cartProducts.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.count,
      0
    );

    this.totalSum = this.cartProducts.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.count * currentValue.item.price,
      0
    );
  }
}
