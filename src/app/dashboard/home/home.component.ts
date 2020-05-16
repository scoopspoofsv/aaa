import { Component, OnInit } from "@angular/core";
import * as data from "../../api/products/products.json";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  products: any = (data as any).default;
  filteredProducts: any = (data as any).default;


  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value : string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: any) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  constructor() {}

  ngOnInit() {
    console.log(data);
  }
}
