import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'product',component:ProductListComponent},

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
