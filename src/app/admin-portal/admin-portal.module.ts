import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BlogsComponent } from './blogs/blogs.component';
import { AuthGuard } from '../auth.guard';


@NgModule({
  declarations: [
    LoginComponent,
    AdminHomeComponent,
    HeaderComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AdminPortalRoutingModule
  ],
  providers: [AuthGuard],
})
export class AdminPortalModule { }
