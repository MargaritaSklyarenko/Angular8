import { Injectable } from '@angular/core';
import { ProductModel, Category } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Array<ProductModel> = [{
    name: 'Amana',
    description: 'Perfect crocodile leather',
    price: 1300,
    category: Category.Dress,
    isAvailable: true
  },
  {
    name: 'JeakSky',
    description: 'Blue skirt',
    price: 300,
    category: Category.Skirt,
    isAvailable: true
  },
  {
    name: 'SkyBlue',
    description: 'Blue dress with purple flashes',
    price: 800,
    category: Category.Dress,
    isAvailable: true
  },
  {
    name: 'Forehead',
    description: 'Winter colllection',
    price: 1000,
    category: Category.Shoes,
    isAvailable: true
  }];

  constructor() { }

  getProducts(): Array<ProductModel> {
    return this.products;
  }
}
