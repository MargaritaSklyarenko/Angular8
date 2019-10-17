import { Injectable } from '@angular/core';
import { CartModel } from '../cart/cart';
import { ProductModel } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts: Array<CartModel> = [];

  constructor() {}

  addCart(cart: CartModel): void {
    let isNewItem = true;

    this.carts.forEach(element => {
      if (element.item.name === cart.item.name) {
        element.count++;
        element.itemsPrice += cart.item.price;
        isNewItem = false;
      }
    });

    if (isNewItem) {
      this.carts.push(cart);
    }
  }

  getCarts(): Array<CartModel> {
    return this.carts;
  }

  deleteCart(cart: CartModel): void {
    let shouldBeRemoved = false;

    this.carts.forEach(element => {
      if (element.item.name === cart.item.name) {
        element.count--;
        element.itemsPrice -= cart.item.price;
        if (!element.count) {
          shouldBeRemoved = true;
        }
      }
    });

    if (shouldBeRemoved) {
      this.carts.splice(this.carts.indexOf(cart), 1);
    }
  }

  // у вас уже есть sum pipe, который делает эту работу
  getTotalSum(): number {
    return this.carts.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.count * currentValue.item.price,
      0
    );
  }

  getTotalCountItems(): number {
    return this.carts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    );
  }
}
