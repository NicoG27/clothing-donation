import {Address} from "./address";

export class Customer {
  formOfAddress?: string;
  title?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  address: Address;

  constructor(address: Address) {
    this.address = address;
  }
}
