import { Component, OnInit } from "@angular/core";
import { Product } from "../../common/interfaces/product.entity";
import { ProductService } from 'src/app/common/services/product.service';
import { Item } from 'src/app/common/interfaces/item';
import { Subscription, Observable, timer } from 'rxjs';



@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  // products: any = (data as any).default;

  products: Product[]= [];
  filteredProducts: Product[];
  items: Item[] = [];
  errorMessage: string;
  total: number = 0;
  added: boolean = false;

  private subscription: Subscription;
  private timer: Observable<any>;


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


  constructor(private productService : ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe({

      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  addItem(id: number): void{
    this.productService.getELement(id).subscribe({
      next: (products) => {
        this.products[id] = products[id];
        var item: Item = {
          product: products[id],
          quantity: 1,
        };
        if (localStorage.getItem("cart") == null) {
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          let cart: any = JSON.parse(localStorage.getItem("cart"));
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
            if (item.product.productId-1 == id) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem("cart", JSON.stringify(cart));
          } else {
            let item: Item = JSON.parse(cart[index]);
            if(item.quantity < 10){item.quantity += 1;}
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.loadCart();
      },
      error: (err) => (this.errorMessage = err),
    });
    this.showNotification();
  }

  loadCart(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
      this.total += item.product.price * item.quantity;
		}
  }

  showNotification(): void{
    this.added = true;
    this.timer = timer(1000);
    this.subscription = this.timer.subscribe(() => {

      this.added = false;
  });
  }
}
