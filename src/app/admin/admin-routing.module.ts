import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminComponent } from './admin.component';

import {
  ManageOrdersComponent,
  ManageProductsComponent
} from './components';

import { AuthorizationGuard } from '../core/guards/authorization.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthorizationGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthorizationGuard],
        children: [
          { path: 'orders', component: ManageOrdersComponent },
          { path: 'products', component: ManageProductsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    ManageOrdersComponent,
    ManageProductsComponent
  ];
}
