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
import {ClothingDonationRequest} from "./clothingDonationRequest";
import {Customer} from "./customer";
import {FormsModule, NgForm} from "@angular/forms";
import {Address} from "./address";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {CrisisArea} from "./crisisArea";
import {MatChipListbox, MatChipOption} from "@angular/material/chips";

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
    MatChipOption
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  clothingDonationRequest: ClothingDonationRequest = {customer: new Customer(new Address())};

  collection: boolean = true;
  crisisAreas: CrisisArea[] = [
    {name: "Hamburg Wandsbek", zipcodes: ["22041", "22047", "22049", "22089"]},
    {name: "Hamburg Wilhelmsburg", zipcodes: ["20539", "21107", "21109"]},
    {name: "Hamburg St. Pauli", zipcodes: ["20354", "20355", "20357", "20359", "22767", "22769"]}
  ]
  onSubmit(myForm: NgForm) {

    console.log(myForm.value);
    console.log(myForm.valid);
    console.log(myForm.controls['zipcode'].value)
    console.log(myForm.controls['crisisArea'].value)
    if (myForm.valid && (this.checkCrisisArea(myForm.controls['zipcode'].value, myForm.controls['crisisArea'].value.zipcodes) || !this.collection)) {

    }
  }

  checkCrisisArea(zipcode: string, zipcodes: string[]) {
    return zipcodes.some(value => value.substring(0,2) === zipcode.substring(0,2));
  }
}
