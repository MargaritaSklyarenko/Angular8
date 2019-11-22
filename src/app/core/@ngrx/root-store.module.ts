// @NgRx
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './meta-reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../../environments/environment'
import { EffectsModule } from '@ngrx/effects';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsStoreModule } from './products/products-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    metaReducers,
    StoreModule.forRoot({}, {
      runtimeChecks: {
       strictStateImmutability: true,
       strictActionImmutability: true,
       strictStateSerializability: true,
       strictActionSerializability: true
     }
    }),
    EffectsModule.forRoot([]),
    ProductsStoreModule,
    // Instrumentation must be imported after importing StoreModule (config is optional) 
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ]
})
export class RootStoreModule { }
