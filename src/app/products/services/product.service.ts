import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'assets/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productUrl).pipe(
      //tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<ProductModel | undefined> {
    return this.getProducts().pipe(
      map((products: ProductModel[]) => products.find(product => product.productId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
