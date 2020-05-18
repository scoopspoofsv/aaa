import { Injectable } from "@angular/core";

import * as data from "src/api/products/products.json";

import { Product } from "../interfaces/product.entity";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: "root",
})
export class ProductService {
  // products: any = (data as any).default;
  private productUrl = "assets/products/products.json";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  getELement(id: number): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl)
  }

  private handleError(err:HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    }
    else{
      errorMessage = `server returned code: ${err.status},  error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }



  //   find(id: number): Product[] {
  //     console.log(this.products[this.getSelectedIndex(id)]);
  //     return this.products[this.getSelectedIndex(id)];
  // }

  //   private getSelectedIndex(id: number) {
  //     for (var i = 0; i < this.products.length; i++) {
  //         if (this.products[i].productId == id) {
  //             return i;
  //         }
  //     }
  //     return -1;
  // }
}
