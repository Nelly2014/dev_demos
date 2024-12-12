package com.example.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Model.Payment;
import com.example.Service.PaymentService;

@RestController
@RequestMapping("/payments")
public class PaymentController {
	 @Autowired
	    private PaymentService paymentService;

	    // Endpoint to add a payment
	    @PostMapping
	    public ResponseEntity<Payment> addPayment(@RequestBody Payment payment) {
	        Payment savedPayment = paymentService.addPayment(payment);
	        return ResponseEntity.ok(savedPayment);
	    }

	    // Endpoint to get all payments
	    @GetMapping
	    public ResponseEntity<List<Payment>> getAllPayments() {
	        List<Payment> payments = paymentService.getAllPayments();
	        return ResponseEntity.ok(payments);
	    }

	    // Endpoint to get a payment by ID
	    @GetMapping("/{id}")
	    public ResponseEntity<Optional<Payment>> getPaymentById(@PathVariable Long id) {
	        Optional<Payment> payment = paymentService.getPaymentById(id);
	        if (payment.isPresent()) {
	            return ResponseEntity.ok(payment);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

	    // Endpoint to delete a payment by ID
	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deletePaymentById(@PathVariable Long id) {
	        paymentService.deletePaymentById(id);
	        return ResponseEntity.noContent().build();
	    }
}
