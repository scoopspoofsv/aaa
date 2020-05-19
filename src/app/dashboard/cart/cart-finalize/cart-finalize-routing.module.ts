import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartFinalizeComponent } from './cart-finalize.component';

const routes: Routes = [{ path: '', component: CartFinalizeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartFinalizeRoutingModule { }
