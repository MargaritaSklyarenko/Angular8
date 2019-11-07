import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent {

  constructor(public localStorageService: LocalStorageService) { }

  onRemoveOrdersHistory(): void {
    this.localStorageService.removeItem('orders');
  }

}
