import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomePageComponent } from './home-page/home-page.component';
// import { NavigationComponent } from './navigation/navigation.component';
// import { FooterComponent } from './footer/footer.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { ServiceComponent } from './service/service.component';
// import { ProductsComponent } from './products/products.component';
// import { BlogsComponent } from './blogs/blogs.component';
// import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AccodianComponent } from './pages/home/accodian/accodian.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomePageComponent,
    // NavigationComponent,
    // FooterComponent,
    // AboutUsComponent,
    // ServiceComponent,
    // ProductsComponent,
    // BlogsComponent,
    // ContactusComponent,
    HeaderComponent,
    HomeComponent,
    AccodianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
