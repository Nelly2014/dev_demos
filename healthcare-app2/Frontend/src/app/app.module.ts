
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

import { RouterModule } from '@angular/router'; 






import { AdminComponent } from './admin/admin.component'; 
// Import standalone components
import { AppComponent } from './app.component'; // Standalone Component
import { LoginComponent } from './login/login.component'; // Standalone Component
import { RegisterComponent } from './register/register.component'; // Standalone Component
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './Product/add-product/add-product.component'; 
import { ProductService } from './Product/product.service';
import { CommonModule } from '@angular/common';


@NgModule({
  



  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,  // Import standalone component
    LoginComponent, // Import standalone component
    RegisterComponent, // Import standalone component
    HomeComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AdminComponent,
    AddProductComponent ,
    CommonModule

  ],
  providers: [ProductService],
  
})
export class AppModule {}
