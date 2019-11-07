import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminComponent } from './admin.component';

import {
  ManageOrdersComponent
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
        children: [
          { path: 'orders', component: ManageOrdersComponent },
          {
            path: 'products',
            loadChildren: () => import('./components/manage-products/manage-products.module').then(m => m.ManageProductsModule)
          }
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
    ManageOrdersComponent
  ];
}
