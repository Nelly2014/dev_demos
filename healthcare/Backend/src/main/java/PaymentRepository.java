package com.example.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Model.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {

}