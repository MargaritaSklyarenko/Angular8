import { Product, ProductModel, Category } from './../../../products/models/product.model';

export interface ProductsState {
  data: ReadonlyArray<Product>;
}

export const initialTasksState: ProductsState = {
    data: [
      new ProductModel(1, "Leaf Rake", Category.Garden, "Leaf rake with 48-inch wooden handle.", 19.95, "", true)
    ]
};
