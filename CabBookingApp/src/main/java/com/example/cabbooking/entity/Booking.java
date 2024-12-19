package com.example.cabbooking.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity

public class Booking {
	 @Id
	    private Long id;
	    private String fromLocation;
	    private String toLocation;
	    private Integer typeOfCab;

	    // Constructors, getters and setters
	    public Booking() {}

	    public Booking(Long id, String fromLocation, String to, Integer typeOfCab) {
	        this.id = id;
	        this.fromLocation = fromLocation;
	        this.toLocation = to;
	        this.typeOfCab = typeOfCab;
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

		public Integer getTypeOfCab() {
			return typeOfCab;
		}

		public void setTypeOfCab(Integer typeOfCab) {
			this.typeOfCab = typeOfCab;
		}

		@Override
		public String toString() {
			return "Booking [id=" + id + ", fromLocation=" + fromLocation + ", toLocation=" + toLocation
					+ ", typeOfCab=" + typeOfCab + "]";
		}

		
	   
		



}