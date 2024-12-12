package com.example.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Model.Cart;
import com.example.Service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {
	 @Autowired
	    private CartService cartService;

	    @GetMapping("/{customerId}")
	    public List<Cart> getCartByCustomerId(@PathVariable Long customerId) {
	        return cartService.findCartsByCustomerId(customerId);
	    }

	    @PostMapping
	    public Cart addCart(@RequestBody Cart cart) {
	        return cartService.saveCart(cart);
	    }

	    @DeleteMapping("/{id}")
	    public void deleteCart(@PathVariable Long id) {
	        cartService.deleteCart(id);
	    }
}
