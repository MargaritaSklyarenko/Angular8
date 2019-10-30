import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: ProductModel;

  constructor( public productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.product = new ProductModel();

    const observer = {
      next: (product: ProductModel) => (this.product = { ...product }),
      error: (err: any) => console.log(err)
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
        this.productService.getProduct(+params.get('productID'))
        )
      )
      .subscribe(observer);
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
  }

}
