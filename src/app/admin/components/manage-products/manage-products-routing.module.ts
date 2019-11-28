import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    ManageProductComponent,
    ManageProductListComponent,
    ManageProductItemComponent,
} from './components';

import { ManageProductsComponent } from './manage-products.component';
import { EditResolveGuard } from './guards/edit-resolve.guard';
import { ProductsStatePreloadingGuard, ProductExistsGuard } from '../../../products/guards';

const routes: Routes = [
    {
      path: '',
      component: ManageProductsComponent,
      children: [
        {
          path: 'add',
          component: ManageProductComponent
        },
        {
          path: 'edit/:id',
          component: ManageProductComponent,
          resolve: {
            product: EditResolveGuard
          },
          canActivate: [ProductExistsGuard]
        },
        {
          path: '',
          component: ManageProductListComponent,
          canActivate: [ProductsStatePreloadingGuard],
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProductsRoutingModule {
  static components = [
    ManageProductListComponent,
    ManageProductItemComponent,
    ManageProductComponent,
    ManageProductsComponent
  ];
}
