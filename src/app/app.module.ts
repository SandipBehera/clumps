import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AccodianComponent } from './pages/home/accodian/accodian.component';
import { CardComponent } from './pages/home/card/card.component';
import { ContactUsComponent } from './pages/home/contact-us/contact-us.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { WebDevelopmentComponent } from './pages/services/web-development/web-development.component';
import { SoftwareDevelopmentComponent } from './pages/services/software-development/software-development.component';
import { AppDevelopmentComponent } from './pages/services/app-development/app-development.component';
import { SocialMediaComponent } from './pages/services/social-media/social-media.component';
import { BusinessAutomationComponent } from './pages/services/business-automation/business-automation.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { ProductsRoutingModule } from './products/products-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AccodianComponent,
    CardComponent,
    ContactUsComponent,
    FooterComponent,
    WebDevelopmentComponent,
    SoftwareDevelopmentComponent,
    AppDevelopmentComponent,
    SocialMediaComponent,
    BusinessAutomationComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ProductsRoutingModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
