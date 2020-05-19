import { Component, OnInit } from '@angular/core';

import { Item } from "../../../common/interfaces/item";
import { Product } from "../../../common/interfaces/product.entity";

@Component({
  selector: 'app-cart-shipping',
  templateUrl: './cart-shipping.component.html',
  styleUrls: ['./cart-shipping.component.scss']
})
export class CartShippingComponent implements OnInit {
  static getShippingFee(): number {
    throw new Error("Method not implemented.");
  }

  products: Product[] = [];
  items: Item[] = [];
  total: number = 0;
  shippingFee: number = 0;
  static shippingFee: any;
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

  changeShippingFee(amount: number){
    this.shippingFee = amount;
  }

}
