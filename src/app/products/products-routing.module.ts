import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CrmPlusComponent } from './crm-plus/crm-plus.component';

const routes: Routes = [
  {path:"product",component:ProductComponent},
  {
    path:"product",children:[
      {path:'crm-plus',component:CrmPlusComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
