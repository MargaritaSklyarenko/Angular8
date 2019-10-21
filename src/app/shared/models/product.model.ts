export class ProductModel {
    productId: number;
    productName: string;
    productCategory: Category;
    description: string;
    price: number;
    isAvailable: boolean;
    imageUrl: string
}

export enum Category {
    Computer = 'Computer',
    Garden = 'Garden'
}
