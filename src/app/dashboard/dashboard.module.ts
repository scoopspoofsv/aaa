import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from "../common/components/header/header.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '../common/components/footer/footer.component';



@NgModule({
  declarations: [DashboardComponent, HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
