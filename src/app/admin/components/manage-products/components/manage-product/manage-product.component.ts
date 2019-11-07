import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/products/services/product.service';
import { switchMap, pluck } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  product: ProductModel;
  isNew: boolean;

  constructor(
    public productService: ProductService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
      this.product = { ...product };
      this.isNew = !!this.product.id;
    });
  }

  onSaveProduct(): void {
    this.productService.editProducts(this.product).subscribe(() => this.onGoBack());
  }

  onAddProduct(): void {
    this.productService.addProducts(this.product).subscribe(() => this.onGoBack());
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }
}
