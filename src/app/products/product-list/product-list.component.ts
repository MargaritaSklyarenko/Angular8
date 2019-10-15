import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../../shared/product';
import { CartService } from '../../shared/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<ProductModel> = [];

  constructor(public productService: ProductService,
    public cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuyProduct(product: ProductModel): void {
    if (product.isAvailable) {
      console.log(`Thanks for ordering ${product.name}`);
      this.cartService.addCart({item: product, count: 1});
    } else {
      console.log(`Sorry. ${product.name} is not currently available`);
    }
  }
}
