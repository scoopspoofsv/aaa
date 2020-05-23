import { Component, OnInit } from '@angular/core';
import { Product } from "../..//interfaces/product.entity";
import { ProductService } from 'src/app/common/services/product.service';
import { Item } from 'src/app/common/interfaces/item';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  products: Product[]= [];
  items: Item[] = [];

  totalItems: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.loadCart()
  }

  loadCart(): void {
		this.totalItems = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
      this.totalItems += item.quantity;
    }
	}

}
