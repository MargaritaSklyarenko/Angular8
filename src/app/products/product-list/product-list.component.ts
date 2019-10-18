import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ProductModel } from '../../shared/models/product.model';
import { CartService } from '../../core/services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Array<ProductModel> = [];

  constructor(public productService: ProductService, public cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  ngOnDestroy() {
    console.log('Destroying product list');
  }

  onBuyProduct(product: ProductModel): void {
    if (product.isAvailable) {
      console.log(`Thanks for ordering ${product.name}`);
      this.cartService.addProduct({item: product, count: 1, itemsPrice: product.price});
    } else {
      console.log(`Sorry. ${product.name} is not currently available`);
    }
  }
}
