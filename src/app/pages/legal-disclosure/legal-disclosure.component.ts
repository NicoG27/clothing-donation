import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-legal-disclosure',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatDivider
  ],
  templateUrl: './legal-disclosure.component.html',
  styleUrl: './legal-disclosure.component.css'
})
export class LegalDisclosureComponent {

}
