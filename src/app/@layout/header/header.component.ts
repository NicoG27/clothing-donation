import {Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {RouterLink} from "@angular/router";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";

@Component({
    selector: 'app-header',
    standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatTabGroup,
    MatTab,
    MatButton,
    RouterLink,
    MatAnchor,
    ExtendedModule,
    FlexModule
  ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
