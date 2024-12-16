import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/api/categories'; 
  constructor(private http: HttpClient) { }

  // Add category
  addCategory(category: { name: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, category);
  }

  // Get all categories
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }
}
