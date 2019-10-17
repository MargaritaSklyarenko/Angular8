import { ProductModel } from 'src/app/shared/product';

export class CartModel {
    item: ProductModel;
    count: number;
    itemsPrice: number;
}// в названии файла нет типа сущности, как и у product.ts
// лучше что-то добавить .model или .entity ...
