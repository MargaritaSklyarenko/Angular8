import { createAction, props } from '@ngrx/store';

import { Product } from './../../../products/models/product.model';

export const getProducts = createAction('[Product List Page (App)] GET_PRODUCTS');

export const getProduct = createAction(
  '[Add/Edit Product Page (App)] GET_PRODUCT',
  props<{ taskID: number }>()
);

export const createProduct = createAction(
  '[Product List Page] CREATE_PRODUCT',
  props<{ product: Product }>()
);

export const updateProducts = createAction(
  '[Product List Page] UPDATE_PRODUCT',
  props<{ product: Product }>()
);

export const completeProduct = createAction(
  '[Product List Page] COMPLETE_PRODUCT',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Product List Page] DELETE_PRODUCT',
  props<{ product: Product }>()
);
