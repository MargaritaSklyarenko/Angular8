import { ProductModel } from 'src/app/products/models/product.model';

export class CartModel {
    item: ProductModel;
    count: number;
    price: number;
    name: string;
}
