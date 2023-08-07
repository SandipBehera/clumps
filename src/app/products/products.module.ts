import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { CrmPlusComponent } from './crm-plus/crm-plus.component';


@NgModule({
  declarations: [
    ProductComponent,
    CrmPlusComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
