import { Component, OnInit } from '@angular/core';
import * as data from "../../../api/products/products.json";
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from 'src/app/common/services/product.service';
import { Product } from 'src/app/common/interfaces/product.entity';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  // products: any = (data as any).default;
  stateID: number;
  errorMessage : string;

  products: Product[]= [];

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.stateID = id-1;
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe({

      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err
    });
  }


}
