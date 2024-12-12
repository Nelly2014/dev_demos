import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = 'https://api.example.com/cart'; // Replace with your cart API URL
  private items: any[] = []; // Replace `any[]` with a specific type if available

  constructor(private http: HttpClient) {}


  getCartItems(): Observable<any[]> {
    return of(this.items); // Wrap array in Observable
  }

  updateItemQuantity(item: any): void {
    const existingItem = this.items.find(i => i.product.id === item.product.id);
    if (existingItem) {
      existingItem.quantity = item.quantity;
    }
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}

function of(items: any[]): Observable<any[]> {
  throw new Error('Function not implemented.');
}

