import { Injectable } from "@angular/core";
import { Products } from "../interfaces/products";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private productUrl = "api/products/products.json";

  constructor(private http: HttpClient) {}


  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.productUrl).pipe(
      tap((data) => console.log("All : " + JSON.stringify(data))),
      catchError(this.handleError)
    );
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
}
