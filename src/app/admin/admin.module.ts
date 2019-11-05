import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [AdminRoutingModule.components, ManageOrdersComponent, ManageProductsComponent]
})
export class AdminModule {}
