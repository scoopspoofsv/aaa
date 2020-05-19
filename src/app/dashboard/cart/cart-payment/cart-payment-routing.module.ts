import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPaymentComponent } from './cart-payment.component';

const routes: Routes = [{ path: '', component: CartPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartPaymentRoutingModule { }
