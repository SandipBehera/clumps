import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { CrmPlusComponent } from './crm-plus/crm-plus.component';
import { FooterComponent } from './layouts/footer/footer.component';
import {HeaderComponent} from './layouts/header/header.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { RetailSuiteComponent } from './retail-suite/retail-suite.component';
import { ClumpsEcommerceSuiteComponent } from './clumps-ecommerce-suite/clumps-ecommerce-suite.component';
import { ClumpsMarketingSuiteComponent } from './clumps-marketing-suite/clumps-marketing-suite.component';
import { ClumpsSystemicSolutionsERPComponent } from './clumps-systemic-solutions-erp/clumps-systemic-solutions-erp.component';

@NgModule({
  declarations: [
    ProductComponent,
    CrmPlusComponent,
    FooterComponent,
    HeaderComponent,
    ContactUsComponent,
    RetailSuiteComponent,
    ClumpsEcommerceSuiteComponent,
    ClumpsMarketingSuiteComponent,
    ClumpsSystemicSolutionsERPComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
