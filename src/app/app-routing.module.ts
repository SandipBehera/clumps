import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
// import { ServiceComponent } from './service/service.component';
// import { ProductsComponent } from './products/products.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo:'',pathMatch: 'full'},
  {path: 'about-us', component: AboutUsComponent},
  // {path: 'services', component: ServiceComponent },
  // {path: 'products', component: ProductsComponent },
  // {path: 'contact-us', component: ContactusComponent },
  // {path: 'blogs', component: BlogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
