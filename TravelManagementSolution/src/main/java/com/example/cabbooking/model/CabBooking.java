package com.example.cabbooking.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

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

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getFromLocation() {
			return fromLocation;
		}

		public void setFromLocation(String fromLocation) {
			this.fromLocation = fromLocation;
		}

		public String getToLocation() {
			return toLocation;
		}

		public void setToLocation(String toLocation) {
			this.toLocation = toLocation;
		}

		public String getCabType() {
			return cabType;
		}

		public void setCabType(String cabType) {
			this.cabType = cabType;
		}
	    
}