import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { CrmPlusComponent } from './crm-plus/crm-plus.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ProductComponent,
    CrmPlusComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
