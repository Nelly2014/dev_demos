import { Component } from '@angular/core';
import { CartService } from '../cart/CartService'; 
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { CartService } from '../cart/cart.service';  // Make sure to implement CartService
@Component({
  selector: 'app-cart',
  imports:[FormsModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = []; // Replace `any[]` with a specific type if available

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Fetch initial cart items from CartService
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  updateCart(item: any): void {
    this.cartService.updateItemQuantity(item); // Update quantity in service
  }

  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1); // Remove from local array
      this.cartService.removeItem(index); // Update service
    }

  }

  totalAmount(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  checkout(): void {
    console.log('Proceeding to checkout...');
    // Implement checkout logic
  }
}











