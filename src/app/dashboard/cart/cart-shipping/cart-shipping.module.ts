import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartShippingRoutingModule } from './cart-shipping-routing.module';
import { CartShippingComponent } from './cart-shipping.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CartShippingComponent],
  imports: [
    CommonModule,
    CartShippingRoutingModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class CartShippingModule { }
