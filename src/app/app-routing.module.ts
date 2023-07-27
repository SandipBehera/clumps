import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WebDevelopmentComponent } from './pages/products/web-development/web-development.component';
import { SoftwareDevelopmentComponent } from './pages/products/software-development/software-development.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo:'',pathMatch: 'full'},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'product/web-development', component:WebDevelopmentComponent },
  {path: 'product/software-development', component:SoftwareDevelopmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
