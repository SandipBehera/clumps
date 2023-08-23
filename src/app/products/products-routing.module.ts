import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CrmPlusComponent } from './crm-plus/crm-plus.component';
import { RetailSuiteComponent } from './retail-suite/retail-suite.component';
import { ClumpsEcommerceSuiteComponent } from './clumps-ecommerce-suite/clumps-ecommerce-suite.component';
import { ClumpsMarketingSuiteComponent } from './clumps-marketing-suite/clumps-marketing-suite.component';
import { ClumpsSystemicSolutionsERPComponent } from './clumps-systemic-solutions-erp/clumps-systemic-solutions-erp.component';

const routes: Routes = [
  {path:"product",component:ProductComponent},
  {
    path:"product",children:[
      {path:'crm-plus',component:CrmPlusComponent},
      {path:'retail-suite',component:RetailSuiteComponent},
      {path:'clumps-e-commerce-suite',component:ClumpsEcommerceSuiteComponent},
      {path:'clumps-marketing-suite',component:ClumpsMarketingSuiteComponent},
      {path:'clumps-systemic-solutions-erp',component:ClumpsSystemicSolutionsERPComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
