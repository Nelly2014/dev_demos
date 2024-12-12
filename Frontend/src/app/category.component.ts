import { Component , OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [FormsModule,CommonModule ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent  implements OnInit{
  categoryName: string = '';
  categories: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }
  addCategory(): void {
    if (this.categoryName.trim()) {
      this.categoryService.addCategory({ name: this.categoryName }).subscribe(response => {
        alert('Category added successfully!');
        this.categoryName = '';
        this.loadCategories();  // Reload categories
      }, error => {
        console.error('Error adding category:', error);
      });
    }
  }

  // Load all categories
  loadCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    }, error => {
      console.error('Error loading categories:', error);
    });
  }
}
