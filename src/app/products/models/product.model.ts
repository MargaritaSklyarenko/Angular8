export enum Category {
  Computer = 'Computer',
  Garden = 'Garden',
  Other = 'Other'
}

export interface Product {
  id?: number;
  productName?: string;
  productCategory?: Category;
  description?: string;
  price?: number;
  imageUrl?: string;
  isAvailable?: boolean;
}


export class ProductModel implements Product {
    constructor(
      public id: number = null,
      public productName: string = '',
      public productCategory: Category = Category.Other,
      public description: string = '',
      public price: number = 0,
      public imageUrl: string = '',
      public isAvailable?: boolean
    ) {
      this.isAvailable = isAvailable || false;
    }
  }
