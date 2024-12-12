import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart: any[] = [];

  completeCheckout(): void {
    alert('Checkout complete!');
    this.cart = [];
  }
}
