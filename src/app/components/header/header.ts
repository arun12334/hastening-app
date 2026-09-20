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

  isGuestMode(): boolean {
    return localStorage.getItem('guest_mode') === 'true';
  }

  isLoggedIn(): boolean {
    return !this.isGuestMode() && Boolean(localStorage.getItem('user_profile_info'));
  }

  isLovingOurNeighborActive(): boolean {

    const url = this.router.url;

    return [

      '/loving-our-neighbor',

      '/pray-for-someone',
      '/join-a-justserve-activity',
      '/sisters-in-zion',
      '/joining-emmas-relief-society',
      '/book-of-mormon-study-groups',
      '/sharing-a-story-of-love',



    ].some(route => url.startsWith(route));

  }

  isSharingOurFaithActive(): boolean {
    return ['/sharing-our-faith', '/messages-disciples-all-storys']
      .some(route => this.router.url.startsWith(route));
  }

}