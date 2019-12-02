import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { LayoutModule } from './layout/layout.module';
import { httpInterceptorProviders } from './core/interceptors';
import { RootStoreModule } from './core/@ngrx/root-store.module';
import { OrdersModule } from './orders/orders.module';
import { ProcessOrderModule } from './order/process-order.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CartModule,
    OrdersModule,
    ProcessOrderModule,
    ProductsModule,
    LayoutModule,
    HttpClientModule,
    RootStoreModule,
    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
