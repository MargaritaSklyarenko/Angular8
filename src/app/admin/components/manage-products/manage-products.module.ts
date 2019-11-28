import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ManageProductsRoutingModule } from './manage-products-routing.module';

@NgModule({
  imports: [CommonModule, ManageProductsRoutingModule, FormsModule],
  declarations: [ManageProductsRoutingModule.components]
})
export class ManageProductsModule {}

