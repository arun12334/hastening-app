import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FeatureAccess {
  private readonly router = inject(Router);

  readonly registrationPromptVisible = signal(false);

  requestAccess(): void {
    if (localStorage.getItem('guest_mode') === 'true') {
      this.registrationPromptVisible.set(true);
      return;
    }

    this.registrationPromptVisible.set(false);
  }

  requireMember(): boolean {
    if (localStorage.getItem('guest_mode') === 'true') {
      this.registrationPromptVisible.set(true);
      return false;
    }

    return true;
  }

  closeRegistrationPrompt(): void {
    this.registrationPromptVisible.set(false);
  }

  goToRegistration(): void {
    this.closeRegistrationPrompt();
    this.router.navigate(['/register-now']);
  }

  goToLogin(): void {
    this.closeRegistrationPrompt();
    this.router.navigate(['/login']);
  }
}
