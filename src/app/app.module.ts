import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { Page404Component } from './components/public/page404/page404.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './components/private/admin/categories/categories-list/categories-list.component'

import { HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from './components/private/admin/products/product-list/product-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    NavbarComponent,
    DashboardComponent,
    TopbarComponent,
    SidebarComponent,
    CategoriesListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
