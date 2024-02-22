import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {NgIf} from "@angular/common";
import {HeaderComponent} from "./@layout/header/header.component";
import {FooterComponent} from "./@layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIcon, MatIconButton, MatToolbar, NgIf, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clothing-donation';
}
