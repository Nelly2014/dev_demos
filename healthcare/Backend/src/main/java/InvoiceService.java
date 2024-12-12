package com.example.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Model.Invoice;
import com.example.Repositories.InvoiceRepository;

@Service
public class InvoiceService {
	 @Autowired
	    private InvoiceRepository invoiceRepository;

	    public List<Invoice> findInvoicesByCustomerId(Long customerId) {
	        return invoiceRepository.findByCustomerId(customerId);
	    }

	    public Invoice saveInvoice(Invoice invoice) {
	        return invoiceRepository.save(invoice);
	    }
}
