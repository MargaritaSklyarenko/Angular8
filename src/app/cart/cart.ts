import { ProductModel } from 'src/app/shared/product';

export class CartModel {
    item: ProductModel;
    count: number;
    itemsPrice: number;
}
