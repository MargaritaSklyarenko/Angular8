import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ProductModel } from '../product/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  componentName = 'Shopping cart';
  cards: Array<ProductModel> = [];

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cards = this.cartService.getCards();
  }

  onRemove(cart: ProductModel): void {
      this.cartService.deleteCard(cart);
  }
}
