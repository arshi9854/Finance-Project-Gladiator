import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { UserActivationComponent } from './user-activation/user-activation.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'product',component:ProductDashboardComponent},
  {path:'buyproduct/:product_id',component:BuyProductComponent},
  {path:'approve-user/:user-id',component:UserActivationComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
