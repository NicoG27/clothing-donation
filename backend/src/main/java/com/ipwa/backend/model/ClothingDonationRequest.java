package com.ipwa.backend.model;

import lombok.Data;

import java.util.List;

@Data
public class ClothingDonationRequest {
  private Customer customer;
  private List<String> clothesType;
  private String crisisArea;
  private String office;
}
