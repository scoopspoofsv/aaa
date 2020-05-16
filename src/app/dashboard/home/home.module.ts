import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from 'src/app/common/components/star/star.component';
import { ProductDetailComponent } from 'src/app/common/components/product-detail/product-detail.component';


@NgModule({
  declarations: [HomeComponent,
  StarComponent,ProductDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
