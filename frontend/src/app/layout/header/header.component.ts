
import { Component, HostListener } from '@angular/core';
import { headerItems } from './header-items';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor,CommonModule],
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
  // styles: [`
  //   .header {
  //     position: sticky;
  //     top: 0;
  //     height: 64px;
  //     display: flex;
  //     align-items: center;
  //     padding: 0 1rem;
  //     background: #111;
  //     color: #fff;
  //     z-index: 1000;
  //   }
  // `]
})
export class HeaderComponent {
  items = headerItems;
  isScrolled = false;
  private ticking = false;

  @HostListener('window:scroll')
  onScroll() {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.applyParallax();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }
  private applyParallax() {
    const scrollY = window.scrollY;
    this.isScrolled = scrollY > 40;
    const clamped = Math.min(scrollY, 120);

    document.documentElement.style.setProperty(
      '--header-offset',
      `${clamped * 0.06}px`
    );

    document.documentElement.style.setProperty(
      '--header-opacity',
      `${0.72 + clamped * 0.001}`
    );

    document.documentElement.style.setProperty(
      '--header-blur',
      `${14 + clamped * 0.05}px`
    );
  }
}
