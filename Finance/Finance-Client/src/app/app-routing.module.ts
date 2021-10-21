import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { UserActivationComponent } from './user-activation/user-activation.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';


const routes: Routes = [
  {path:"*",component:HomePageComponent},
  {path:'',component:HomePageComponent},
  {path:'admin',component:AdminHeaderComponent},
  {path:'product',component:ProductDashboardComponent},
  {path:'buyproduct/:product_id',component:BuyProductComponent},
  {path:'profile',component:CarddetailsComponent},
  {path:'approve-user/:user-id',component:UserActivationComponent},
  {path:'admin/verifyuser',component:UserActivationComponent}
  

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
