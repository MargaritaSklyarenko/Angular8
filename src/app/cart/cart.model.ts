import { ProductModel } from 'src/app/shared/product.model';

export class CartModel {
    item: ProductModel;
    count: number;
    itemsPrice: number;
}
