import { Component, OnInit } from '@angular/core';
import * as data from "../../api/products/products.json";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products: any = (data as any).default;
  stateID: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.stateID = id-1;
  }


}
