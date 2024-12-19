package com.example.cabbooking.controller;//import com.example.cabbooking.entity.Booking;
import com.example.cabbooking.entity.*;
import com.example.cabbooking.service.CabBookingService;
import com.example.cabbooking.service.FareCalculationService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
@RequestMapping("/cab")
public class CabBookingController {
	private final CabBookingService bookingService;
    private final FareCalculationService fareService;

    public CabBookingController(CabBookingService bookingService, FareCalculationService fareService) {
        this.bookingService = bookingService;
        this.fareService = fareService;
    }

    @GetMapping("/home")
    public String homePage() {
        return "home";
    }
    // Mapping for the Booking page (Booking.html)
    @GetMapping("/booking")
    public String bookingPage() {
        return "Booking";  // Return the "Booking.html" view
    }

    @Autowired
    private CabBookingService cabBookingService;

    @PostMapping("/Booking")
    
    public String bookCab(@RequestParam String from, @RequestParam String to, @RequestParam int typeOfCab) {
        return cabBookingService.bookCab(to, to, typeOfCab);
     
        
    }
    
    
    
    
    
    
    
    
    
   // public ResponseEntity<Map<String, Object>> bookCab(
        //    @RequestParam String from,
        //    @RequestParam String to,
       //     @RequestParam Integer typeOfCab) {

        // Process the booking
       // Booking booking = cabBookingService.bookCab(from, to, typeOfCab);

        // Prepare the response
        //Map<String, Object> response = new HashMap<>();
       // response.put("code", 1);
       // response.put("message", "Luxury Cab Booked from " + booking.getFrom() + " to " + booking.getTo());
       // return ResponseEntity.ok(response);
    }
    
    
    
    
    
    


