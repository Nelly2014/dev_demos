//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-view-products',
  imports: [CommonModule],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent implements OnInit {
  products: any;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router) {}

    ngOnInit(): void {
      const productId = this.route.snapshot.paramMap.get('id');
      if (productId) {
        this.loadProduct(+productId);
      }
    }
  
    loadProduct(id: number): void {
      this.productService.getProductById(id).subscribe(
        (data) => {
          this.products = data;
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
    }
  
    goBack(): void {
      this.router.navigate(['/products']); // Navigate back to the product list
    }
  
}
