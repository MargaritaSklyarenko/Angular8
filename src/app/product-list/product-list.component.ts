import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ProductModel } from '../product/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<ProductModel> = [];

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
