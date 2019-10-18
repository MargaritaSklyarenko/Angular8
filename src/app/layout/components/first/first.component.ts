import { Component, OnInit } from '@angular/core';
import { ProductModel, Category } from '../../../shared/models/product.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  readonly componentName: string = 'First';
  products: Array<ProductModel> = [{
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
  }];

  constructor() { }
}
