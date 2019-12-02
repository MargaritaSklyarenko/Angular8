import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartListComponent } from './cart/components';
import { AuthorizationGuard } from './core/guards/authorization.guard';
import { LoginComponent } from './layout/components/login/login.component';
import { OrdersListComponent } from './orders/components';
import { ProcessOrderComponent } from './order/process-order/process-order.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: 'admin',
    canLoad: [AuthorizationGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'order',
    component: ProcessOrderComponent
  },
  {
    path: 'orders',
    component: OrdersListComponent
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
