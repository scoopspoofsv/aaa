import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from 'src/app/common/components/star/star.component';
import { SharedModule } from 'src/app/common/modules/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class ProductDetailModule { }
