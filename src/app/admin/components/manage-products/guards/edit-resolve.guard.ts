import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';
import { map, catchError, take } from 'rxjs/operators';
import { ProductService } from 'src/app/products/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class EditResolveGuard implements Resolve<ProductModel> {

  constructor(
    private router: Router,
    public productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {
    if (!route.paramMap.has('id')) {
      return of(new ProductModel(null, ''));
    }

    const id = +route.paramMap.get('id');

    return this.productService.getProduct(id).pipe(
      map((product: ProductModel) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/home']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
