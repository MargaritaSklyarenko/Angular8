import { Product, ProductModel, Category } from './../../../products/models/product.model';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface ProductsState extends EntityState<Product>  {
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export function selectProductId(product: Product): number {
  return product.id;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: selectProductId
});

export const initialProductsState: ProductsState = adapter.getInitialState({
    loading: false,
    loaded: false,
    error: null
});
