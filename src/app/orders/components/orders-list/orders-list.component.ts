import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { CartModel } from 'src/app/cart/models';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  componentName = 'Orders';
  orders: Array<CartModel>;
  constructor(public localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.orders = this.localStorageService.getItem('orders') || [];
  }

}
