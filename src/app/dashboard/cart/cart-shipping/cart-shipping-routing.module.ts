import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartShippingComponent } from './cart-shipping.component';

const routes: Routes = [{ path: '', component: CartShippingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartShippingRoutingModule { }
