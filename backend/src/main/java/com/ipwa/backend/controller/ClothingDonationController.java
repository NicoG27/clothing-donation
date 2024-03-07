package com.ipwa.backend.controller;

import com.ipwa.backend.model.ClothingDonationRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class ClothingDonationController {

  @PostMapping("/save")
  public ResponseEntity<?> saveClothingDonation(@RequestBody ClothingDonationRequest clothingDonationRequest) {
    log.info("Data received: {}", clothingDonationRequest);
    return new ResponseEntity<>(clothingDonationRequest, HttpStatus.OK);
  }
}
