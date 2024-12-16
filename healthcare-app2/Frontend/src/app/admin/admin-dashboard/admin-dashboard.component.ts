import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin/admin.model';
@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  constructor(private router: Router) { }
  onAddCategory() {
    this.router.navigate(['/add-category']); // Navigate to the Add Category page
  }

  onAddProduct() {
    this.router.navigate(['/add-product']); // Navigate to the Add Product page
  }

  onViewAllProducts() {
    this.router.navigate(['/view-products']); // Navigate to the View Products page
  }

  onLogout() {
    // Perform logout logic, e.g., clear session storage or token
    localStorage.removeItem('role');
    this.router.navigate(['/']); // Navigate to the login page
  }
  
}