package com.example.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Model.Invoice;
import com.example.Service.InvoiceService;

@RestController
@RequestMapping("/invoice")
public class InvoiceController {
	 @Autowired
	    private InvoiceService invoiceService;

	    @GetMapping("/{customerId}")
	    public List<Invoice> getInvoicesByCustomerId(@PathVariable Long customerId) {
	        return invoiceService.findInvoicesByCustomerId(customerId);
	    }

	    @PostMapping
	    public Invoice createInvoice(@RequestBody Invoice invoice) {
	        return invoiceService.saveInvoice(invoice);
	    }
}
