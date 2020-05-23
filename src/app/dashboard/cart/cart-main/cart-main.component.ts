import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import * as data from "src/api/products/products.json";
import { Item } from "../../../common/interfaces/item";
import { ProductService } from "../../../common/services/product.service";
import { Product } from "../../../common/interfaces/product.entity";

@Component({
  selector: "app-cart-main",
  templateUrl: "./cart-main.component.html",
  styleUrls: ["./cart-main.component.scss"],
})
export class CartMainComponent implements OnInit {
  // products: any = (data as any).default;
  products: Product[] = [];
  items: Item[] = [];
  total: number = 0;
  errorMessage: string;
  couponCode: string;
  couponDiscount: number = 0;
  couponApplied: boolean = false;



  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      var id = params["id"] - 1;

      if (id || id == 0) {
        this.productService.getELement(id).subscribe({
          next: (products) => {
            this.products[id] = products[id];
            var item: Item = {
              product: products[id],
              quantity: 1,
            };
            console.log(item);
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
      } else {
        this.loadCart();
      }
    });
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

	remove(id: number): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.productId == (id)) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}

  clearAll(): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
    cart.length = 0;
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
  }


  addItem(id: number): void{
    this.productService.getELement(id).subscribe({
      next: (products) => {
        this.products[id] = products[id];
        var item: Item = {
          product: products[id],
          quantity: 1,
        };
        console.log(item);
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
            else{alert("maximum limit reached for " + item.product.productName + "!!!");}
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.loadCart();
      },
      error: (err) => (this.errorMessage = err),
    });
  }


  onSubmit() {
    return this.couponCode;
  }

  checkCode(): void{
    if(this.couponCode == "firstbuy")
    {
      this.couponDiscount = 50;
      this.couponApplied = true;
    }
    else{
      this.couponDiscount = 0;
      this.couponApplied = false;
    }
  }
}


