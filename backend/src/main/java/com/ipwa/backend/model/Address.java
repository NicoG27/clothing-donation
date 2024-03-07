package com.ipwa.backend.model;

import lombok.Data;

@Data
public class Address {
  private String street;
  private String houseNumber;
  private String zipcode;
  private String city;
  private String country;
}
