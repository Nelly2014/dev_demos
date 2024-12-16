import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { ProductService } from './Product/product.service';
import { ProductService } from '../product.service';
//import { AddProductComponent } from '../add-product/add-product.component'; 
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule, ],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'] 
})
export class AddProductComponent {
  product: any = { name: '', brand: '', price: null, quantity: null, image: '', category: null };

  constructor(private productService: ProductService, private router: Router) {}
  
  onSubmit(): void {
    this.productService.addProduct(this.product).subscribe({
      next: (response) => {
        console.log('Product added successfully:', response);
        this.router.navigate(['/view-products']); // Navigate back to the products page
      },
      error: (error) => {
        console.error('Error adding product:', error);
      },
      complete: () => {
        console.log('Product addition process complete');
      }
    });
 
  }
}
