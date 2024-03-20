import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path:'admin',component:LoginComponent},
  {
    path:"admin",children:[
      {path:"home",component:AdminHomeComponent,canActivate:[AuthGuard]},
      {path:'blogs',component:BlogsComponent,canActivate:[AuthGuard]},
    ]
  },
  {path:'',redirectTo:'admin',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPortalRoutingModule { }
