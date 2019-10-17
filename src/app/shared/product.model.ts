export class ProductModel {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
}

export enum Category {
    Shoes = 'Shoes',
    Dress = 'Dress',
    Skirt = 'Skirt'
}
