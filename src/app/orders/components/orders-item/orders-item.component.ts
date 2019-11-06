import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from 'src/app/cart/models';

@Component({
  selector: 'app-orders-item',
  templateUrl: './orders-item.component.html',
  styleUrls: ['./orders-item.component.css']
})
export class OrdersItemComponent implements OnInit {
  @Input () order: CartModel;

  constructor() { }

  ngOnInit() {
  }

}
