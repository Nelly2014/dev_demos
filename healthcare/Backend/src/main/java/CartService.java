package com.example.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Model.Cart;
import com.example.Repositories.CartRepository;

@Service
public class CartService {
	 @Autowired
	    private CartRepository cartRepository;

	    public List<Cart> findCartsByCustomerId(Long customerId) {
	        return cartRepository.findByCustomerId(customerId);
	    }

	    public Cart saveCart(Cart cart) {
	        return cartRepository.save(cart);
	    }

	    public void deleteCart(Long id) {
	        cartRepository.deleteById(id);
	    }
}
