import { Injectable } from '@angular/core';
import { ProductModel, Category } from '../shared/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  carts: Array<ProductModel> = [];

  constructor() { }

  addCart(cart: ProductModel): void {
    this.carts.push(cart);
  }

  getCarts(): Array<ProductModel> {
    return this.carts;
  }

  deleteCart(cart: ProductModel): void {
    this.carts.splice(this.carts.indexOf(cart), 1);
  }
}
