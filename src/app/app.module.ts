import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products/products-routing.module';
import { ContactComponent } from './layouts/contact/contact.component';
import { BusinessAutomationComponent } from './pages/services/business-automation/business-automation.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AccodianComponent } from './pages/home/accodian/accodian.component';
import { CardComponent } from './pages/home/card/card.component';
import { ContactUsComponent } from './pages/home/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { AppDevelopmentComponent } from './pages/services/app-development/app-development.component';
import { SocialMediaComponent } from './pages/services/social-media/social-media.component';
import { SoftwareDevelopmentComponent } from './pages/services/software-development/software-development.component';
import { WebDevelopmentComponent } from './pages/services/web-development/web-development.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProductsModule } from './products/products.module';
import { AboutUsComponent } from './about-us/about-us.component';

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
    PrivacyComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    ProductsRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
