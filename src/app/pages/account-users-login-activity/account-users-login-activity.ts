import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';

interface LoginHistoryEntry {
  device: string;
  browser: string;
  location: string;
  ipAddress: string;
  loggedInAt: string;
  status: 'Current session' | 'Successful';
  icon: string;
}

@Component({
  selector: 'app-account-users-login-activity',
  imports: [Header, RouterLink],
  templateUrl: './account-users-login-activity.html',
  styleUrl: './account-users-login-activity.scss'
})
export class AccountUsersLoginActivity {
  readonly loginHistory: LoginHistoryEntry[] = [
    {
      device: 'Windows PC',
      browser: 'Chrome',
      location: 'Current device',
      ipAddress: 'Hidden for your security',
      loggedInAt: 'Today, 11:42 PM',
      status: 'Current session',
      icon: 'bi-laptop'
    },
    {
      device: 'Android Phone',
      browser: 'Chrome Mobile',
      location: 'India',
      ipAddress: 'Hidden for your security',
      loggedInAt: 'September 17, 2026 · 8:14 PM',
      status: 'Successful',
      icon: 'bi-phone'
    },
    {
      device: 'Windows PC',
      browser: 'Microsoft Edge',
      location: 'India',
      ipAddress: 'Hidden for your security',
      loggedInAt: 'September 12, 2026 · 10:06 AM',
      status: 'Successful',
      icon: 'bi-display'
    }
  ];
}
