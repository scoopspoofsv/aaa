import { Injectable } from "@angular/core";

import { Product } from "../interfaces/product.entity";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


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
