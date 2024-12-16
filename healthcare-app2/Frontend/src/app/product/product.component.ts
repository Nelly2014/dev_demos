import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Product/product.service';
import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
    constructor() { }
    
}
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ],
  templateUrl: './product.component.html',
  //styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = []; // To store products
  selectedProduct: any = null; // To store selected product for edit

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();  // Load products when component initializes
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response; // Store products in the array
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

  // Add a new product
  onAddProduct(): void {
    this.router.navigate(['/add-product']); // Navigate to the add product page
  }

  // Edit a product
  onEditProduct(productId: number): void {
    this.router.navigate([`/edit-product/${productId}`]); // Navigate to the edit product page with ID
  }

  // Delete a product
  //onDeleteProduct(productId: number): void {
  //  if (confirm('Are you sure you want to delete this product?')) {
   //   this.productService.deleteProduct(productId).subscribe(
     //   () => {
      //    this.loadProducts();  // Reload products after deletion
      //  },
      //  (error) => {
      //    console.error('Error deleting product:', error);
      //  }
     // );
   // }
  //}
}
