import { Component, OnInit } from '@angular/core';
import { Admin } from './admin.model';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin',
  imports: [FormsModule,CommonModule ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],

  
})
export class AdminComponent implements OnInit {
  admins: Admin[] = [];
  admin: Admin = new Admin(0, '', '', '');
  isEditing: boolean = false;
  

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getAllAdmins();
  }

   

  // Get all admins
  getAllAdmins(): void {
    this.adminService.getAllAdmins().subscribe((data) => {
      this.admins = data;
    });
  }

  // Create or update admin
  saveAdmin(): void {
    if (this.isEditing) {
      this.adminService.saveAdmin(this.admin).subscribe(() => {
        this.isEditing = false;
        this.getAllAdmins();
      });
    } else {
      this.adminService.saveAdmin(this.admin).subscribe(() => {
        this.getAllAdmins();
      });
    }
    this.admin = new Admin(0, '', '', '');
  }

  // Edit admin
  editAdmin(admin: Admin): void {
    this.admin = { ...admin };
    this.isEditing = true;
  }


    // Method to cancel editing and revert to view mode
    cancelEdit(arg: string) {
      console.log(arg);
      this.isEditing = false;
      
      
    }
  

  // Delete admin
  deleteAdmin(id: number): void {
    this.adminService.deleteAdmin(id).subscribe(() => {
      this.getAllAdmins();
    });
  }
}
