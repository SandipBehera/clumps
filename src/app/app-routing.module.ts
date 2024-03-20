import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WebDevelopmentComponent } from './pages/services/web-development/web-development.component';
import { SoftwareDevelopmentComponent } from './pages/services/software-development/software-development.component';
import { AppDevelopmentComponent } from './pages/services/app-development/app-development.component';
import { SocialMediaComponent } from './pages/services/social-media/social-media.component';
import { BusinessAutomationComponent } from './pages/services/business-automation/business-automation.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'service/web-development', component: WebDevelopmentComponent },
  {
    path: 'service/software-development',
    component: SoftwareDevelopmentComponent,
  },
  { path: 'service/app-development', component: AppDevelopmentComponent },
  { path: 'service/social-media-ads', component: SocialMediaComponent },
  {
    path: 'service/business-automation',
    component: BusinessAutomationComponent,
  },
  { path: 'privacy', component: PrivacyComponent },
  {path:'contact-us', component: ContactComponent},
  {path:'blogs',component:BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
