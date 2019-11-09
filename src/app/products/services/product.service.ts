import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productUrl).pipe(
      // tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProducts(product: ProductModel): Observable<ProductModel> {
    const body = JSON.stringify(product);

    return this.http.post<ProductModel>(this.productUrl, body, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  editProducts(product: ProductModel): Observable<ProductModel> {
    const url = `${this.productUrl}/${product.id}`;
    const body = JSON.stringify(product);

    return this.http.put<ProductModel>(url, body, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<ProductModel | undefined> {
    const url = `${this.productUrl}/${id}`;

    return this.http.get<ProductModel>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Option for Observable method
  // deleteProduct(id: number) {
  //   const url = `${this.productUrl}/${id}`;\
  //   return this.http.delete(url).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  deleteProduct(id: number): Promise<any> {
    const url = `${this.productUrl}/${id}`;

    return (
      this.http
        .delete(url)
        .toPromise()
        .catch(this.handleError)
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
