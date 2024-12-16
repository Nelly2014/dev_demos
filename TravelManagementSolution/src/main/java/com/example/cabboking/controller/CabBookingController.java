package com.example.cabbooking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.cabbooking.model.ResponseMessage;
import com.example.cabbooking.service.CabBookingService;

@RestController
@RequestMapping("/cab")
public class CabBookingController {
    @Autowired
    private CabBookingService cabBookingService;

    @PostMapping("/book")
    public ResponseEntity<?> bookCab(@RequestParam String from, @RequestParam String to, @RequestParam int typeOfCab) {
        String result = cabBookingService.bookCab(from, to, typeOfCab);
        return ResponseEntity.ok(new ResponseMessage(1, result));
    }
}
