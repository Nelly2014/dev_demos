package com.example.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Model.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice, Long>{
	 List<Invoice> findByCustomerId(Long customerId);
}
