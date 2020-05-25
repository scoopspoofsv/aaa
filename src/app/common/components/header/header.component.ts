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
  isDarkMode = false;

  totalItems: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.loadCart();
    if (JSON.parse(localStorage.getItem('darkmode'))) {
      this.toggleTheme();
    }
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

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkmode', JSON.stringify(this.isDarkMode));
    document.documentElement.style.setProperty('--background', this.isDarkMode ? '#101313' : '#fff');
    document.documentElement.style.setProperty('--primary', this.isDarkMode ? '#F2CA7E' : '#733702');
    document.documentElement.style.setProperty('--light', this.isDarkMode ? '#191919' : '#F2F2F2');
    document.documentElement.style.setProperty('--white-color', this.isDarkMode ? '#070707' : '#FFF');
    document.documentElement.style.setProperty('--black-color', this.isDarkMode ? '#fff' : '#070707');
    document.documentElement.style.setProperty('--medium', this.isDarkMode ? '#0D0D0D' : '#D98566');
  }

}
