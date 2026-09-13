import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss'
})
export class Welcome {
  private readonly router = inject(Router);
  bannerImage = 'assets/home/home-banner.png';
  mobileBannerImage = 'assets/home/home-header-mobile.png';

  @HostListener('window:resize')
  updateBannerImage(): void {
    this.bannerImage = window.innerWidth <= 768
      ? this.mobileBannerImage
      : 'assets/home/home-banner.png';
  }

  constructor() {
    this.updateBannerImage();
  }

  goToMemberLogin(): void {
    localStorage.removeItem('guest_mode');
    this.router.navigate(['/login']);
  }

  continueAsGuest(): void {
    localStorage.setItem('guest_mode', 'true');
    this.router.navigate(['/home']);
  }

  goToRegistration(): void {
    localStorage.setItem('guest_mode', 'true');
    this.router.navigate(['/register-now']);
  }
}
