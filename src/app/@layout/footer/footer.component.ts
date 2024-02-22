import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        MatToolbar,
        NgIf,
        RouterLink,
        MatAnchor,
        MatIcon
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
}
