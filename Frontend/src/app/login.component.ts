import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule],
  
})
export class LoginComponent {
  username :string = '';
  password :string= '';

  //onLogin() :void{
    //console.log('Login attempt:',this.username,this.password);

    //onLogin() {
      //console.log('Username:', this.username);
      //console.log('Password:', this.password);

 // }
 constructor(private router: Router) {}

 onLogin() {
   // Dummy validation logic for user and admin login
   if (this.username === 'admin' && this.password === 'admin') {
     // Store the role (you can also use a service to handle authentication and role)
     localStorage.setItem('role', 'admin');
     this.router.navigate(['/admin-dashboard']);
   } else if (this.username === 'user' && this.password === 'user') {
     localStorage.setItem('role', 'user');
     this.router.navigate(['/user-dashboard']);
   } else {
     alert('Invalid credentials');
   }
 }



}












