package com.example.cabbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cabbooking.CabBooking;

@Repository
public interface CabBookingRepository extends JpaRepository<CabBooking, Long> {
	
}

