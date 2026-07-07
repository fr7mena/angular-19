import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hydrate',
  standalone: true,
  imports: [],
  templateUrl: './hydrate.html',
  styleUrl: './hydrate.scss',
})
export class Hydrate {
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    if (this.isBrowser) {
      localStorage.setItem('key', 'test');
    }
  }
}
