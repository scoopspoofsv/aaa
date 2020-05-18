import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "products/:id",
        loadChildren: () =>
          import("./product-detail/product-detail.module").then(
            (m) => m.ProductDetailModule
          ),
      },
      {
        path: "cart-main",
        loadChildren: () =>
          import("./cart/cart-main/cart-main.module").then(
            (m) => m.CartMainModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
