import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent, ProductDetailComponent } from './components';

import { ProductsStatePreloadingGuard, ProductExistsGuard } from './guards';

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent,
   // canActivate: [ProductsStatePreloadingGuard],
  },
  {
    path: 'details/:id',
    component: ProductDetailComponent,
    canActivate: [ProductExistsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
