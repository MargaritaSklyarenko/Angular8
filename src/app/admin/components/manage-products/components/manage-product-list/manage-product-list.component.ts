import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/services/product.service';
import { ProductModel } from 'src/app/products/models/product.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-product-list',
  templateUrl: './manage-product-list.component.html',
  styleUrls: ['./manage-product-list.component.css']
})

export class ManageProductListComponent implements OnInit {
  products: Observable<ProductModel[]>;

  constructor(
    public productService: ProductService,
    private router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onEditProduct(product: ProductModel): void {
    const link = ['./edit', product.id];
    this.router.navigate(link, {relativeTo: this.activatedRoute});
  }

  onAddProduct(): void {
    const link = ['./add'];
    this.router.navigate(link, {relativeTo: this.activatedRoute});
  }

  onDeleteProduct(product: ProductModel): void {
    // Option for Observable method
    // this.productService.deleteProduct(product.id).subscribe(
    //   () => this.products = this.productService.getProducts()
    // );

    this.productService
      .deleteProduct(product.id)
      .then(() => (this.products = this.productService.getProducts()))
      .catch(err => console.log(err));
  }
}
