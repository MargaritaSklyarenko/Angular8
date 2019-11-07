import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services';
import { CartModel } from '../../models';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  componentName = 'Shopping cart';
  carts: Array<CartModel> = [];
  fields = ['name', 'count', 'price'];

  constructor(
    public cartService: CartService,
    public localStorageService: LocalStorageService,
    private router: Router) { }

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

  onBuyCartItems(): void {
    this.localStorageService.addItem('orders', this.carts);
    this.clearCart();
    this.router.navigate(['/orders']);
  }

  clearCart(): void {
    this.cartService.removeAllProducts();
  }
}
