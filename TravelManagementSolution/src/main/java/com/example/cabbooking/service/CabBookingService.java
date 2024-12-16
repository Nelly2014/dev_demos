package com.example.cabbooking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cabbooking.CabBooking;
import com.example.cabbooking.repository.CabBookingRepository;

@Service
public class CabBookingService {
    @Autowired
    private CabBookingRepository cabBookingRepository;

    public String bookCab(String from, String to, int typeOfCab) {
        String cabType = (typeOfCab == 1) ? "Standard Cab" : "Luxury Cab";
        String message = cabType + " Booked from " + from + " to " + to;

        // Save to database
        CabBooking cabBooking = new CabBooking(from, to, cabType);
        cabBookingRepository.save(cabBooking);

        return message;
    }
}
