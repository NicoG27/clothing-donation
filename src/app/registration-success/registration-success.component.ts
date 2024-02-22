import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatLabel, MatPrefix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ClothingDonationRequest} from "../@model/clothingDonationRequest";
import {DatePipe} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-registration-success',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatIcon,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    MatPrefix,
    DatePipe,
    MatButton
  ],
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.scss','../form/form.component.scss']
})
export class RegistrationSuccessComponent {
  @Input() item!: ClothingDonationRequest;
  @Output() backEvent = new EventEmitter<boolean>();
  date = new Date();
  time = this.date.getHours() + ":" + this.date.getMinutes();

  back() {
    this.backEvent.emit(false);
  }

}
