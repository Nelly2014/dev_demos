import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  searchQuery: string = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.customerService.getProducts().subscribe(
      (data) => (this.products = data),
      (error) => console.error(error)
    );
  }

  search(): void {
    if (this.searchQuery) {
      this.customerService.searchProducts(this.searchQuery).subscribe(
        (data) => (this.products = data),
        (error) => console.error(error)
      );
    } else {
      this.loadProducts();
    }
  }
}
