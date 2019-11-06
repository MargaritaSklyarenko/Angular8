import { Injectable } from '@angular/core';
import { CartModel } from '../models';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: Array<CartModel>;
  totalQuantity: number;
  totalSum: number;

  constructor(public localStorageService: LocalStorageService) {
    this.cartProducts = this.localStorageService.getItem('carts') || [];
  }

  getCarts(): Array<CartModel> {
    return this.cartProducts ;
  }

  addProduct(cart: CartModel): void {
    let isNewItem = true;

    this.cartProducts.forEach(element => {
      if (element.item.productName === cart.item.productName) {
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
      if (element.item.productName === cart.item.productName) {
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
    element.price += price;
  }

  decreaseQuantity(element, price): void {
    element.count--;
    element.price -= price;
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

    this.localStorageService.setItem('carts', this.cartProducts);
  }
}
