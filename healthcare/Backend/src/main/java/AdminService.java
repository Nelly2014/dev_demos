package com.example.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Model.Admin;
import com.example.Repositories.AdminRepository;

@Service
public class AdminService {
	 @Autowired
	    private AdminRepository adminRepository;

	    public Admin findAdminByEmail(String email) {
	        return adminRepository.findByEmail(email);
	    }
}
