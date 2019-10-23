import { ProductModel } from 'src/app/shared/models/product.model';

export class CartModel {
    item: ProductModel;
    count: number;
    price: number;
    name: string;
}
