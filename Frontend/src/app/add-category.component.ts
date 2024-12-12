import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-add-category',
  imports: [FormsModule, ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  categoryName: string = '';

  constructor() {}

  onAddCategory() {
    if (this.categoryName.trim()) {
      console.log(`Category Added: ${this.categoryName}`);
      // Logic for adding the category to the backend or local list
      this.categoryName = ''; // Clear the input field
    } else {
      alert('Please enter a valid category name.');
    }
  }
}
