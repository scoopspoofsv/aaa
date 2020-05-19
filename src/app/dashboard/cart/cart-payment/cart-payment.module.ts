import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPaymentRoutingModule } from './cart-payment-routing.module';
import { CartPaymentComponent } from './cart-payment.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [CartPaymentComponent],
  imports: [
    CommonModule,
    CartPaymentRoutingModule,
    FlexLayoutModule
  ]
})
export class CartPaymentModule { }
