import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { AdminComponent } from './admin/admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { ViewCategoriesComponent } from './category/view-categories/view-categories.component';
import { ProductService } from './Product/product.service';
import { AddProductComponent } from './Product/add-product/add-product.component'; 
import { ViewProductsComponent } from './Product/view-products/view-products.component';
import { CategoryComponent } from './category/category.component';

import { FormsModule } from '@angular/forms'; // Import FormsModule
// Define your routes
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'add-category', component:AddCategoryComponent },
  { path: 'view-categories', component:ViewCategoriesComponent },
{ path:'admin',component:AdminComponent},
{path:'add-product',component:AddProductComponent},
{path:'view-product',component:ViewProductsComponent},
{path:'customer-dashboard',component:CustomerDashboardComponent},
{path:'Category',component:CategoryComponent},
{ path: 'products/:id', component: ViewProductsComponent },

{ path: '', redirectTo: 'products', pathMatch: 'full' },
{ path: 'products', component: ProductListComponent },
{ path: 'cart', component: CartComponent },
{ path: 'checkout', component: CheckoutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),AddProductComponent,ViewProductsComponent,FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}





