import {Customer} from "./customer";
import {CrisisArea} from "./crisisArea";

export class ClothingDonationRequest {
  customer: Customer;
  clothesType?: string;
  crisisArea?: CrisisArea;


  constructor(customer: Customer) {
    this.customer = customer;
  }
}
