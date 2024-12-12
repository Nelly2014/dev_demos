package com.example.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Model.Admin;
import com.example.Service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	 @Autowired
	    private AdminService adminService;

	    @GetMapping("/{email}")
	    public Admin getAdminByEmail(@PathVariable String email) {
	        return adminService.findAdminByEmail(email);
	    }
}
