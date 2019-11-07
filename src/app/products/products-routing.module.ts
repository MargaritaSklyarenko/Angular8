import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent, ProductDetailComponent } from './components';


const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent,
  },
  {
    path: 'details/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
