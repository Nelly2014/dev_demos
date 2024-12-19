package com.example.cabbooking;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.example.cabbooking"})
public class CabBookingAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(CabBookingAppApplication.class, args);
	}

}
