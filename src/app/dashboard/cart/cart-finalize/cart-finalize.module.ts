import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartFinalizeRoutingModule } from './cart-finalize-routing.module';
import { CartFinalizeComponent } from './cart-finalize.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [CartFinalizeComponent],
  imports: [
    CommonModule,
    CartFinalizeRoutingModule,
    FlexLayoutModule
  ]
})
export class CartFinalizeModule { }
