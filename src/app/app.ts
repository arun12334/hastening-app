import { Component, DestroyRef, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Footer } from './components/footer/footer';
import { FeatureAccess } from './services/feature-access';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hastening-app');
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  readonly featureAccess = inject(FeatureAccess);
  readonly showCommonFooter = signal(this.shouldShowFooter(this.router.url));

  constructor() {
    this.navigateFromDefaultPath();

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(event => this.showCommonFooter.set(this.shouldShowFooter(event.urlAfterRedirects)));
  }

  private navigateFromDefaultPath(): void {
    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
    if (currentPath !== '/') {
      return;
    }

    const hasLoggedInUser = Boolean(localStorage.getItem('user_profile_info'));
    const isGuest = localStorage.getItem('guest_mode') === 'true';
    const destination = hasLoggedInUser || isGuest ? '/home' : '/login';

    void this.router.navigateByUrl(destination);
  }

  private shouldShowFooter(url: string): boolean {
    const path = url.split('?')[0].split('#')[0].replace(/^\/+/, '');
    return path !== '' && path !== 'welcome' && path !== 'login';
  }
}
