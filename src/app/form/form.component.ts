import {Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {ClothingDonationRequest} from "../@model/clothingDonationRequest";
import {Customer} from "../@model/customer";
import {FormsModule, NgForm} from "@angular/forms";
import {Address} from "../@model/address";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Office} from "../@model/office";
import {MatChipListbox, MatChipOption} from "@angular/material/chips";
import {RegistrationSuccessComponent} from "../registration-success/registration-success.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatButton,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardImage,
    MatCardActions,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    FormsModule,
    NgIf,
    NgForOf,
    NgOptimizedImage,
    MatPrefix,
    MatSuffix,
    MatChipListbox,
    MatChipOption,
    RegistrationSuccessComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  clothingDonationRequest: ClothingDonationRequest = {customer: new Customer(new Address())};

  collection: boolean = true;
  isRegistered: boolean = false;
  errorMessage = '';
  crisisAreas= ["Ukraine", "Syrien", "Afghanistan", "Irak", "Somalia", "Kongo"];
  offices: Office[] = [
    { name: "Hamburg Wandsbek", zipcodes: ["22041", "22047", "22049", "22089"]},
    { name: "Hamburg Wilhelmsburg", zipcodes: ["20539", "21107", "21109"]},
    { name: "Hamburg St. Pauli", zipcodes: ["20354", "20355", "20357", "20359", "22767", "22769"]},
    { name: "Berlin Mitte", zipcodes: ["10115", "10117", "10119", "10178", "10179"]},
    { name: "Berlin Prenzlauer Berg", zipcodes: ["10405", "10407", "10409", "10435", "10437", "10439"]},
    { name: "Berlin Friedrichshain", zipcodes: ["10243", "10245", "10247", "10249"]},
    { name: "Berlin Kreuzberg", zipcodes: ["10961", "10963", "10965", "10967", "10997", "10999"]},
    { name: "Berlin Neukölln", zipcodes: ["12043", "12045", "12047", "12049", "12051", "12053", "12055", "12057", "12059"]}
  ];

  onSubmit(myForm: NgForm) {
    if (myForm.valid && (!this.collection || this.checkOffices(myForm.controls['zipcode'].value, this.offices.flatMap(office => office.zipcodes)))) {
      this.isRegistered = true;
    } else if (myForm.controls['zipcode'].value) {
      this.errorMessage = "Ihre Postleitzahl ist nicht im Bereich einer unserer Geschäftstellen. Wir sind vertreten in folgenden Bezirken: " + this.offices.flatMap(office => office.name).join(', ');
    }
  }

  checkOffices(zipcode: string, zipcodes: string[]) {
    return zipcodes.some(value => value.substring(0,2) === zipcode.substring(0,2));
  }

}
