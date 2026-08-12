import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  constructor(public router: Router) {}

  isLovingOurNeighborActive(): boolean {

    const url = this.router.url;

    return [

      '/loving-our-neighbor',

      '/sharing-a-story-of-love',

      '/pray-for-someone',
      '/join-a-justserve-activity',
      '/sisters-in-zion',
      '/joining-emmas-relief-society',


    ].some(route => url.startsWith(route));

  }

}