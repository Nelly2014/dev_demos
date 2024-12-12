package com.example.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Model.Cart;

public interface CartRepository  extends JpaRepository<Cart, Long>{
	List<Cart> findByCustomerId(Long customerId);
}
