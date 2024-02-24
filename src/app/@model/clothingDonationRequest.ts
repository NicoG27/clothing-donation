import {Customer} from "./customer";

export class ClothingDonationRequest {
  customer: Customer;
  clothesType?: string[];
  crisisArea?: string;
  office?: string;


  constructor(customer: Customer) {
    this.customer = customer;
  }
}
