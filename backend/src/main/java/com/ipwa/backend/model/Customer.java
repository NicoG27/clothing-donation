package com.ipwa.backend.model;

import lombok.Data;

@Data
public class Customer {
  private String formOfAddress;
  private String title;
  private String firstname;
  private String lastname;
  private String email;
  private Address address;
}
