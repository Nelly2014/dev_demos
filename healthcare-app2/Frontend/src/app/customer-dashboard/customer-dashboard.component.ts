import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { ProductService } from '../product.service'; // assuming you have a product service to fetch products
import { CartService } from '../cart/CartService'; // assuming you have a cart service
import { ProductService } from '../Product/product.service';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customer-dashboard',

  imports: [CommonModule ],
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {
  products: any[] = []; // Replace 'any[]' with a specific Product[] type if available
  cartItems: any[] = []; // Replace 'any[]' with a specific CartItem[] type if available

  constructor() {}

  ngOnInit(): void {
    // Mock product data; replace with a service call to fetch products
    this.products = [
      { id: 1, name: 'E45', brand: 'Brand A', price: 135, image: 'assets/images/E45.jpeg' },
      { id: 2, name: 'Product 2', brand: 'Brand B', price: 19.99, image: 'product2.jpg' },
      { id: 3, name: 'Product 3', brand: 'Brand C', price: 5.99, image: 'product3.jpg' },
    ];
  

    

    // Initialize cartItems if needed, e.g., from a service or local storage
    this.cartItems = [];
  }

  addToCart(product: any): void {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      // Increment quantity if item already exists in cart
      existingItem.quantity++;
    } else {
      // Add new item to cart
      this.cartItems.push({ ...product, quantity: 1 });
    }
    alert(`${product.name} added to cart!`);
  }

  viewProductDetails(productId: number): void {
    console.log(`Viewing details for product ID: ${productId}`);
    // Navigate to product details page or display details in a modal
  }

  proceedToCheckout(): void {
    console.log('Proceeding to checkout with items:', this.cartItems);
    // Implement checkout navigation or logic
  }

  continueShopping(): void {
    console.log('Continuing shopping...');
    // Implement navigation back to products or homepage
  }
}
