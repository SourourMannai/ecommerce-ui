import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { Page404Component } from './components/public/page404/page404.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './components/private/admin/categories/categories-list/categories-list.component';
import { ProductListComponent } from './components/private/admin/products/product-list/product-list.component';

//Routes declaration
const routes: Routes = [
  // PUBLIC ROUTES
  {
    path: '',
    redirectTo: "home", //redirection to the home page
    pathMatch: "full" //all the content of page
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  //PRIVATE SHARED ROUTES
  {
    path: "dashboard",
    component: DashboardComponent
  },
  //ADMIN ROUTES
  {
    path: "admin/category/list",
    component: CategoriesListComponent
  },
  {
    path: "admin/product/list",
    component: ProductListComponent
  },
  //PAGE 404 
  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
