import { Component, OnInit } from '@angular/core';

import { Item } from "../../../common/interfaces/item";
import { Product } from "../../../common/interfaces/product.entity";

@Component({
  selector: 'app-cart-payment',
  templateUrl: './cart-payment.component.html',
  styleUrls: ['./cart-payment.component.scss']
})
export class CartPaymentComponent implements OnInit {

  products: Product[] = [];
  items: Item[] = [];
  total: number = 0;
  couponCode: string;
  couponDiscount: number = 0;
  couponApplied: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loadCart();
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
      console.log(this.items);
		}
  }

  clearAll(): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
    cart.length = 0;
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
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
