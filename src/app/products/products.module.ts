import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent, ProductComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRoutingModule } from './products-routing.module';
import { ProductsStatePreloadingGuard, ProductExistsGuard } from './guards';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ],
  providers: [
    ProductsStatePreloadingGuard,
    ProductExistsGuard
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductsModule { }
