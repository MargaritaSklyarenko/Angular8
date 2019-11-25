import { Product} from './../../../products/models/product.model';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface ProductsState extends EntityState<Product>  {
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export function selectProductId(product: Product): number {
  // In this case this would be optional since primary key is id
  return product.id;
}

// export function sortProductsByPrice(product1: Product, product2: Product): number {
//   return product1.price.localeCompare(product2.price);
// }

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: selectProductId
  // sortComparer: sortProductsByPrice
});

export const initialProductsState: ProductsState = {
    loading: false,
    loaded: false,
    error: null
};
