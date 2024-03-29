import {Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatButton,
    RouterLink,
    MatAnchor,
  ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
