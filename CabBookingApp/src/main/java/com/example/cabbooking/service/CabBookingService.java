package com.example.cabbooking.service;
import com.example.cabbooking.entity.Booking;
import com.example.cabbooking.repository.BookingRepository;
//import com.example.cabbooking.repository.CabBookingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class CabBookingService {
	 //private final BookingRepository bookingRepository = null;
	 @Autowired
	    private BookingRepository bookingRepository;
	 
	 public String bookCab(String from, String to, int typeOfCab) {
	        // Create a new Booking object
	        Booking booking = new Booking();
	        booking.setFromLocation(from);
	        booking.setToLocation(to);
	        booking.setTypeOfCab(typeOfCab);

	        // Save the booking to the repository (database)
	        bookingRepository.save(booking);

	        // Return a confirmation message
	       // return "Cab booked successfully fromLocation " + from + " toLocation " + to;
	        return "Booking Successful: FromLocation " + from + " toLocation " + to + " with type of cab: " + typeOfCab;
	         
	    }
	 
	 

} 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 

    //public CabBookingService(BookingRepository bookingRepository) {
        //this.bookingRepository = bookingRepository;
   // }

  //  public String bookCab() {
    	
    	//String cabType = (typeOfCab == 1) ? "Standard Cab" : "Luxury Cab";
       // String message = cabType + " Booked from " + from + " to " + to;
        // Create and save the booking
        //Booking booking = new Booking();
        
        //booking.setId(1L);  // Set unique ID
        //booking.setFromLocation("New York");
        //booking.setToLocation("Los Angeles");
        //booking.setTypeOfCab(1);  // Set type of cab (for example, 1 could be for Sedan)

        // Save the booking object to the da
        //return "Luxury Cab Booked from " + from + " to " + to;
        
        // bookingRepository.save(booking);
        //return message;
       //return "Luxury Cab Booked from " + from + " to " + to;
		//return null;
         
    


  