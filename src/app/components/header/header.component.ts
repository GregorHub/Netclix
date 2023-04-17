import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  style = 'bg-trans';
  /**
   * controlls header beavior on scroll
   */
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    if (window.pageYOffset >= 100) {
      this.style = 'bg-black';
    } else {
      this.style = 'bg-trans';
    }
  }

  constructor(private _router: Router) {}
  /**
   * used navigate the website
   */
  navigate(section) {
    this._router.navigateByUrl(section);
  }

  /**
   * mock logout
   */
  logout() {
    this._router.navigateByUrl('/#/');
  }
}
