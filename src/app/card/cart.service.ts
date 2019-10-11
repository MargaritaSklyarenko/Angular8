import { Injectable } from '@angular/core';
import { ProductModel, Category } from '../product/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cards: Array<ProductModel> = [];

  constructor() { }

  addCard(card: ProductModel): void {
    this.cards.push(card);
  }

  getCards(): Array<ProductModel> {
    return this.cards;
  }

  deleteCard(card: ProductModel): void {
    this.cards.splice(this.cards.indexOf(card), 1);
  }
}
