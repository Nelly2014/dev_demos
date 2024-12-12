package com.example.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Model.Payment;
import com.example.Repositories.PaymentRepository;

@Service
public class PaymentService {
	@Autowired
    private PaymentRepository paymentRepository;

    // Add a new payment
    public Payment addPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    // Get all payments
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    // Get a payment by ID
    public Optional<Payment> getPaymentById(Long id) {
        return paymentRepository.findById(id);
    }

    // Delete a payment by ID
    public void deletePaymentById(Long id) {
        paymentRepository.deleteById(id);
    }
}
