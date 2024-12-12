package com.example.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Model.Product;
import com.example.Repositories.ProductRepository;

@Service
public class ProductService {
	 @Autowired
	    private ProductRepository productRepository;

	    public List<Product> getAllProducts() {
	        return productRepository.findAll();
	    }

	    public Product getProductById(Long id) {
	        return productRepository.findById(id).orElse(null);
	    }
}
