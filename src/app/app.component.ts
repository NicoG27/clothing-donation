import {Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIcon, MatIconButton, MatToolbar, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clothing-donation';
  lastScrollTop: number = 0;
  footerVisible: boolean = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    this.footerVisible = currentScroll <= this.lastScrollTop;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
