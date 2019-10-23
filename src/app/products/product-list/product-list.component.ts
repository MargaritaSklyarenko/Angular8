import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ProductModel } from '../../shared/models/product.model';
import { CartService } from '../../core/services/cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Observable<ProductModel[]>;
  errMessage = '';

  constructor(public productService: ProductService, public cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    // Used asynk pipe instead of code below
    // this.productService.getProducts().subscribe(
    //  products => this.products = products,
    //  err => this.errMessage = <any>err
    // );
  }

  ngOnDestroy() {
    console.log('Destroying product list');
  }

  onBuyProduct(product: ProductModel): void {
    if (product.isAvailable) {
      console.log(`Thanks for ordering ${product.productName}`);
      this.cartService.addProduct({item: product, count: 1, price: product.price, name: product.productName});
    } else {
      console.log(`Sorry. ${product.productName} is not currently available`);
    }
  }
}
