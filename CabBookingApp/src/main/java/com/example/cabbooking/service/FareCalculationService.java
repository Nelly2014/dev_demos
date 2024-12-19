package com.example.cabbooking.service;
import org.springframework.stereotype.Service;

@Service
public class FareCalculationService {
	 private static final double FARE_PER_KM = 10.0;

	    public double calculateFare(int distance) {
	        return distance * FARE_PER_KM;
	    }
}
