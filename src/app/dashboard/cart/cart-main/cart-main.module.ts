import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartMainRoutingModule } from './cart-main-routing.module';
import { CartMainComponent } from './cart-main.component';
import { ProductService } from 'src/app/common/services/product.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CartMainComponent],
  imports: [
    CommonModule,
    CartMainRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
})
export class CartMainModule { }
