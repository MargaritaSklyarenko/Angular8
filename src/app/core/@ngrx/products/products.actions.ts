import { createAction, props } from '@ngrx/store';

import { Product } from './../../../products/models/product.model';

export const getProducts = createAction('[Product List Page (App)] GET_PRODUCTS');

export const createProduct = createAction(
  '[Product List Page] CREATE_PRODUCT',
  props<{ product: Product }>()
);

export const updateProduct = createAction(
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

export const getProductsSuccess = createAction(
    '[Get Products Effect] GET_PRODUCTS_SUCCEESS',
    props<{ products: Product[] }>()
);

export const getProductsError = createAction(
    '[Get Products Effect] GET_PRODUCTS_ERROR',
    props<{ error: Error | string }>()
);

export const updateProductSuccess = createAction(
    '[Update Product Effect] UPDATE_PRODUCT_SUCCESS',
    props<{ product: Product }>()
);

export const updateProductError = createAction(
    '[Update Product Effect] UPDATE_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);

export const createProductSuccess = createAction(
    '[Products API] CREATE_PRODUCT_SUCCESS',
    props<{ product: Product }>()
);

export const createProductError = createAction(
    '[Products API] CREATE_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);

export const deleteProductSuccess = createAction(
  '[Delete Product Effect] DELETE_PRODUCT_SUCCESS',
  props<{ product: Product }>()
);

export const deleteProductError = createAction(
  '[Delete Product Effect] DELETE_PRODUCT_ERROR',
  props<{ error: Error | string }>()
);
