import { Component, OnInit } from '@angular/core';
import { ProductModel, Category } from '../../../products/models/product.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  readonly componentName: string = 'First';
  products: Array<ProductModel> = [{
    id: 1,
    productName: 'Leaf Rake',
    productCategory: Category.Garden,
    description: 'Leaf rake with 48-inch wooden handle.',
    isAvailable: true,
    price: 19.95,
    imageUrl: 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
  },
  {
    id: 2,
    productName: 'Garden Cart',
    productCategory: Category.Garden,
    description: '15 gallon capacity rolling garden cart',
    isAvailable: true,
    price: 32.99,
    imageUrl: 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
  }];

  constructor() { }
}
