import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartPaymentRoutingModule } from './cart-payment-routing.module';
import { CartPaymentComponent } from './cart-payment.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CartPaymentComponent],
  imports: [
    CommonModule,
    CartPaymentRoutingModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class CartPaymentModule { }
