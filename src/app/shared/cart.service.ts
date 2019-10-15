import { Injectable } from '@angular/core';
import { CartModel } from '../cart/cart';
import { ProductModel } from './product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  carts: Array<CartModel> = [];

  constructor() { }

  addCart(cart: CartModel): void {
    let isNewItem: boolean = true;

    this.carts.forEach(element => {
      if(element.item.name === cart.item.name) {
        element.count++;
        isNewItem = false;
      }
    });

    isNewItem && this.carts.push(cart);
  }

  getCarts(): Array<CartModel> {
    return this.carts;
  }

  deleteCart(cart: CartModel): void {
    let shouldBeRemoved: boolean = false;

    this.carts.forEach(element => {
      if(element.item.name === cart.item.name) {
        element.count--;
        if (!element.count) { 
          shouldBeRemoved = true;
        }
      }
    });

    shouldBeRemoved && this.carts.splice(this.carts.indexOf(cart), 1);
  }

  getTotalSum(): number {
    return this.carts.reduce((accumulator, currentValue) => accumulator + currentValue.count*currentValue.item.price, 0);
  }

  getTotalCountItems(): number {
    return this.carts.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);
  }
}
