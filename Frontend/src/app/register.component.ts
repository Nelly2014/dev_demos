import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],  // Import FormsModule for this standalone component
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';


  // Define the onRegister() method
  onRegister() {
    // Logic for handling registration (e.g., form submission, API call)
    console.log('Registration details:', this.name, this.email, this.password);
  }
}
