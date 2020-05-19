import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartShippingRoutingModule } from './cart-shipping-routing.module';
import { CartShippingComponent } from './cart-shipping.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [CartShippingComponent],
  imports: [
    CommonModule,
    CartShippingRoutingModule,
    FlexLayoutModule
  ]
})
export class CartShippingModule { }
