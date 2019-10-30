import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from './cart/cart-list/cart-list.component';


const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
