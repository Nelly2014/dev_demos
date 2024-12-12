package com.example.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Model.Admin;
public interface AdminRepository extends JpaRepository<Admin, Long> {
	 Admin findByEmail(String email);
}
