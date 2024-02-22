import {Customer} from "./customer";
import {Office} from "./office";

export class ClothingDonationRequest {
  customer: Customer;
  clothesType?: string;
  crisisArea?: Office;


  constructor(customer: Customer) {
    this.customer = customer;
  }
}
