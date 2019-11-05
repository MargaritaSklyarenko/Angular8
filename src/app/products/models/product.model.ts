export class ProductModel {
    constructor(
      public productId: number = null,
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
  

export enum Category {
    Computer = 'Computer',
    Garden = 'Garden',
    Other = 'Other'
}