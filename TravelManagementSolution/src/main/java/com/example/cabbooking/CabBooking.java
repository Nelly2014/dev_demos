package com.example.cabbooking;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CabBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fromLocation;
    private String toLocation;
    private String cabType;

    // Constructors, getters, setters
    public CabBooking(String from, String to, String cabType) {
        this.fromLocation = from;
        this.toLocation = to;
        this.cabType = cabType;
    }
}
