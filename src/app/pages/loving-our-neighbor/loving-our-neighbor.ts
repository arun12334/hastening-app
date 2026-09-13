import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loving-our-neighbor',
  imports: [Header],
  templateUrl: './loving-our-neighbor.html',
  styleUrl: './loving-our-neighbor.scss',
})
export class LovingOurNeighbor {
  constructor(private router: Router) {}

  goToPrayForSomeone(): void {
    const route = localStorage.getItem('guest_mode') === 'true'
      ? '/settings'
      : '/pray-for-someone';
    this.router.navigate([route]);
  }

  goToSistersInZion(): void {
    const route = localStorage.getItem('guest_mode') === 'true'
      ? '/sisters-in-zion'
      : '/sisters-in-zion';
    this.router.navigate([route]);
  }

  goToJustServeActivity(): void {
    const route = localStorage.getItem('guest_mode') === 'true'
      ? '/join-a-justserve-activity'
      : '/join-a-justserve-activity';
    this.router.navigate([route]);
  }

  goToStoryOfLove(): void {
    const route = localStorage.getItem('guest_mode') === 'true'
      ? '/settings'
      : '/sharing-a-story-of-love';
    this.router.navigate([route]);
  }
}
