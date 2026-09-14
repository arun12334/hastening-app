import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Auth,
  ProfileResponse
} from '../../services/auth';

import { Router } from '@angular/router';

import {
  ChangeDetectorRef
} from '@angular/core';

interface StoredUserProfile {
  id: number;
  name: string;
  email: string;
  publicKey: string;
  token: string;
  created_at: string;
  personalInformation?: {
    userName: string;
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    mobileNumber: string;
    emailAddress: string;
  };
  registrationOptions?: Array<{
    id: number;
    title: string;
    deliveryMethod: string | null;
  }>;
  children?: Array<{ name: string; age: number }>;
  locationGroups?: { primary: string; secondary: string | null };
}

  

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    Header,
    CommonModule,
    FormsModule
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings implements OnInit, OnDestroy {



  // ==========================================
  // SETTINGS
  // ==========================================

  activeSection = 'profile';

  notificationsEnabled = true;

  darkModeEnabled = false;

  selectedLanguage = 'English';

  // ==========================================
  // PROFILE
  // ==========================================

  profile = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    userName: '',
    streetAddress: '',
    city: '',
    state: '',
    country: '',
    zipCode: ''
  };

  registrationOptions: NonNullable<StoredUserProfile['registrationOptions']> = [];
  children: NonNullable<StoredUserProfile['children']> = [];

  // ==========================================
  // PASSWORD
  // ==========================================

  password = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  // ==========================================
  // LANGUAGES
  // ==========================================

  languages = [
    'English',
    'Tamil',
    'Hindi',
    'Telugu',
    'Malayalam'
  ];

  // ==========================================
  // PROFILE API STATE
  // ==========================================

  guestMode = false;

  profileLoading = false;

  profileLoaded = false;

  profileError = '';

  profileEditing = false;

  profileToastVisible = false;

  profileToastMessage = '';

  private profileToastTimer: ReturnType<typeof setTimeout> | undefined;

  showLogoutModal = false;

  passwordVisibility = {
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
  };

  // ==========================================
  // PROFILE DATA FROM API
  // ==========================================

  profileData: StoredUserProfile | null = null;

  // ==========================================
  // CONSTRUCTOR
  // ==========================================

  constructor(
    private auth: Auth,
      private router: Router,
     private cdr: ChangeDetectorRef,
     private zone: NgZone
  ) {}

  // ==========================================
  // ON INIT
  // ==========================================

  ngOnInit(): void {

    console.log(
      '========== SETTINGS INIT =========='
    );

    this.checkGuestMode();

  }

  ngOnDestroy(): void {
    if (this.profileToastTimer) {
      clearTimeout(this.profileToastTimer);
    }
  }

  // ==========================================
  // CHECK GUEST MODE
  // ==========================================

  checkGuestMode(): void {

    const guestMode =
      localStorage.getItem('guest_mode');

    console.log(
      'Guest mode:',
      guestMode
    );

    // ========================================
    // GUEST MODE = TRUE
    // ========================================

    if (guestMode === 'true') {

      console.log(
        'Guest mode is TRUE'
      );

      console.log(
        'Profile API will NOT be called'
      );

      this.guestMode = true;

      this.profileLoading = false;

      this.profileLoaded = false;

      return;
    }

    // ========================================
    // GUEST MODE = FALSE
    // ========================================

    console.log(
      'Guest mode is FALSE'
    );

    this.guestMode = false;

    this.getProfile();

  }

  // ==========================================
  // GET PROFILE
  // ==========================================

  private applyStoredUserProfile(user: StoredUserProfile): void {
    this.profileData = user;
    const personalInformation = user.personalInformation;
    const nameParts = (
      personalInformation?.firstName || user.name || ''
    ).trim().split(/\s+/);

    this.profile = {
      firstName: nameParts[0] || '',
      lastName: personalInformation?.lastName || nameParts.slice(1).join(' '),
      email: personalInformation?.emailAddress || user.email || '',
      phone: personalInformation?.mobileNumber || '',
      userName: personalInformation?.userName || '',
      streetAddress: personalInformation?.streetAddress || '',
      city: personalInformation?.city || '',
      state: personalInformation?.state || '',
      country: personalInformation?.country || '',
      zipCode: personalInformation?.zipCode || ''
    };

    this.registrationOptions = user.registrationOptions || [];
    this.children = user.children || [];
    this.cdr.detectChanges();
  }

  getProfile(): void {

    console.log(
      '========== GET PROFILE =========='
    );

    // ========================================
    // SAFETY CHECK
    // ========================================

    if (this.guestMode) {

      console.log(
        'Guest mode enabled. API call cancelled.'
      );

      return;
    }

    // ========================================
    // GET LOGIN RESPONSE
    // ========================================

    const storedProfile =
      localStorage.getItem(
        'user_profile_info'
      );

    console.log(
      'Stored user profile:',
      storedProfile
    );

    // ========================================
    // NO PROFILE FOUND
    // ========================================

    if (!storedProfile) {

      console.error(
        'user_profile_info not found'
      );

      this.profileError =
        'Please login to view your profile.';

      this.profileLoaded = false;

      return;
    }

    // ========================================
    // PARSE PROFILE
    // ========================================

    let loginData: any;

    try {

      loginData =
        JSON.parse(storedProfile);

    } catch (error) {

      console.error(
        'Invalid user_profile_info JSON:',
        error
      );

      this.profileError =
        'Invalid profile information. Please login again.';

      this.profileLoaded = false;

      return;
    }

    // ========================================
    // CHECK USER OBJECT
    // ========================================

    const storedUser: StoredUserProfile | undefined =
      loginData.users?.[0] ?? loginData.user;

    if (!storedUser) {

      console.error(
        'User information not found'
      );

      this.profileError =
        'User information not found. Please login again.';

      this.profileLoaded = false;

      return;
    }

    this.applyStoredUserProfile(storedUser);
    this.profileLoaded = true;

    // ========================================
    // GET ID
    // ========================================

    const id =
      Number(storedUser.id);

    // ========================================
    // GET TOKEN
    // ========================================

    const token =
      storedUser.token;

    // ========================================
    // GET PUBLIC KEY
    // ========================================

    const publicKey =
      storedUser.publicKey;

    console.log(
      'Profile API payload:',
      {
        id: id,
        token: token,
        publicKey: publicKey
      }

    );

    // ========================================
    // VALIDATE CREDENTIALS
    // ========================================

    if (
      !id ||
      !token ||
      !publicKey
    ) {

      console.error(
        'Profile credentials missing'
      );

      this.profileError =
        'Profile authentication information is missing. Please login again.';

      this.profileLoaded = false;

      return;
    }

    // ========================================
    // START LOADING
    // ========================================

    this.profileLoading = true;

    this.profileError = '';

    // ========================================
    // PROFILE API REQUEST
    // ========================================

    this.auth.getProfile({
      id: id,
      token: token,
      publicKey: publicKey
    }).subscribe({

      // ======================================
      // SUCCESS
      // ======================================

      next: (response: ProfileResponse) => {

        console.log(
          'Profile API response:',
          response
        );

        if (response.success) {

          console.log(
            'Profile loaded successfully'
          );

          // ================================
          // STORE PROFILE RESPONSE IN MEMORY
          // ================================

      if (response.user) {

  // ========================================
  // STORE API PROFILE
  // ========================================

  this.profileData = {
    ...storedUser,
    ...(response.user ?? {})
  };

  console.log(
    'Profile data:',
    this.profileData
  );

  // ========================================
  // GET NAME
  // ========================================

  const personalInformation = storedUser.personalInformation;
  const nameParts =
    (personalInformation?.firstName || storedUser.name || '')
      .trim()
      .split(/\s+/);

  // ========================================
  // UPDATE FORM
  // ========================================

  this.profile = {
    firstName: personalInformation?.firstName || nameParts[0] || '',
    lastName: personalInformation?.lastName || nameParts.slice(1).join(' '),
    email: personalInformation?.emailAddress || storedUser.email || '',
    phone: personalInformation?.mobileNumber || '',
    userName: personalInformation?.userName || '',
    streetAddress: personalInformation?.streetAddress || '',
    city: personalInformation?.city || '',
    state: personalInformation?.state || '',
    country: personalInformation?.country || '',
    zipCode: personalInformation?.zipCode || ''
  };
  this.registrationOptions = storedUser.registrationOptions || [];
  this.children = storedUser.children || [];

  this.cdr.detectChanges();

  console.log(
    'Profile form updated:',
    this.profile
  );
}
          this.profileLoaded = true;

          this.profileError = '';

        } else {

          console.error(
            'Profile API failed:',
            response.message
          );

          this.profileLoaded = false;

          this.profileError =
            response.message ||
            'Unable to load profile.';
        }

        this.profileLoading = false;

      },

      // ======================================
      // ERROR
      // ======================================

      error: (error) => {

        console.error(
          '========== PROFILE API ERROR =========='
        );

        console.error(
          'Full error:',
          error
        );

        console.error(
          'HTTP status:',
          error.status
        );

        console.error(
          'Error response:',
          error.error
        );

        this.profileLoading = false;

        this.profileLoaded = false;

        // ====================================
        // 401
        // ====================================

        if (error.status === 401) {

          this.profileError =
            'Your login session is invalid. Please login again.';

        }

        // ====================================
        // 400
        // ====================================

        else if (error.status === 400) {

          this.profileError =
            error.error?.message ||
            'Invalid profile request.';

        }

        // ====================================
        // 500
        // ====================================

        else if (error.status === 500) {

          this.profileError =
            'Server error. Please try again later.';

        }

        // ====================================
        // NETWORK
        // ====================================

        else if (error.status === 0) {

          this.profileError =
            'Unable to connect to the server. Please check your internet connection.';

        }

        // ====================================
        // OTHER
        // ====================================

        else {

          this.profileError =
            error.error?.message ||
            'Unable to load profile.';
        }

      }

    });

  }

  // ==========================================
  // SELECT SECTION
  // ==========================================

  selectSection(section: string): void {

    this.activeSection = section;

    setTimeout(() => {

      const content =
        document.querySelector(
          '.GJHWV-6283HVW-SETTINGS-JHSWVDJWV__content'
        );

      if (
        window.innerWidth <= 768 &&
        content
      ) {

        content.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

      }

    }, 50);

  }

  // ==========================================
  // SAVE PROFILE
  // ==========================================

  editProfile(): void {
    this.profileEditing = true;
    this.cdr.detectChanges();
  }

  saveProfile(): void {

    console.log(
      'Profile updated:',
      this.profile
    );

    this.profileEditing = false;
    this.showProfileToast('Profile updated successfully.');

  }

  private showProfileToast(message: string): void {
    this.profileToastMessage = message;
    this.profileToastVisible = true;
    this.cdr.detectChanges();

    if (this.profileToastTimer) {
      clearTimeout(this.profileToastTimer);
    }

    this.profileToastTimer = setTimeout(() => {
      this.zone.run(() => {
        this.profileToastVisible = false;
        this.profileToastTimer = undefined;
        this.cdr.detectChanges();
      });
    }, 3000);

  }

  // ==========================================
  // CHANGE PASSWORD
  // ==========================================

  changePassword(): void {

    if (!this.password.currentPassword) {

      this.showProfileToast('Please enter your current password.');

      return;
    }

    if (!this.password.newPassword) {

      this.showProfileToast('Please enter your new password.');

      return;
    }

    if (
      this.password.newPassword.length < 6
    ) {

      this.showProfileToast('New password must be at least 6 characters.');

      return;
    }

    if (
      this.password.newPassword !==
      this.password.confirmPassword
    ) {

      this.showProfileToast('New password and confirm password do not match.');

      return;
    }

    console.log(
      'Password change requested'
    );

    this.password = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };

    this.showProfileToast('Password changed successfully.');

  }

  togglePasswordVisibility(field: keyof typeof this.passwordVisibility): void {
    this.passwordVisibility[field] = !this.passwordVisibility[field];
  }

  // ==========================================
  // NOTIFICATIONS
  // ==========================================

  toggleNotifications(): void {

    this.notificationsEnabled =
      !this.notificationsEnabled;

    console.log(
      'Notifications:',
      this.notificationsEnabled
    );

  }

  // ==========================================
  // DARK MODE
  // ==========================================

  toggleDarkMode(): void {

    this.darkModeEnabled =
      !this.darkModeEnabled;

    document.body.classList.toggle(
      'GJHWV-6283HVW-SETTINGS-JHSWVDJWV-DARK',
      this.darkModeEnabled
    );

  }

  // ==========================================
  // LANGUAGE
  // ==========================================

  saveLanguage(): void {

    console.log(
      'Selected language:',
      this.selectedLanguage
    );

    alert(
      `Language changed to ${this.selectedLanguage}.`
    );

  }

  // ==========================================
  // LOGOUT
  // ==========================================

  logout(): void {

    this.showLogoutModal = true;
    this.cdr.detectChanges();

  }

  closeLogoutModal(): void {

    this.showLogoutModal = false;
    this.cdr.detectChanges();

  }

  confirmLogout(): void {

    console.log(
      'Logout clicked'
    );

    // Later:
    localStorage.removeItem('user_profile_info');
    localStorage.setItem('guest_mode', 'true');
    this.showLogoutModal = false;
    this.router.navigate(['/login']);

  }

  // ==========================================
  // SECTION TITLE
  // ==========================================

  getSectionTitle(): string {

    switch (this.activeSection) {

      case 'profile':
        return 'Profile';

      case 'password':
        return 'Change Password';

      case 'notifications':
        return 'Notifications';

      case 'language':
        return 'Language';

      case 'appearance':
        return 'Appearance';

      case 'privacy':
        return 'Privacy & Security';

      default:
        return 'Settings';

    }

  }

  // ==========================================
  // SECTION DESCRIPTION
  // ==========================================

  getSectionDescription(): string {

    switch (this.activeSection) {

      case 'profile':
        return 'Manage your personal information';

      case 'password':
        return 'Keep your account safe and secure';

      case 'notifications':
        return 'Manage your notification preferences';

      case 'language':
        return 'Choose your preferred language';

      case 'appearance':
        return 'Customize your application appearance';

      case 'privacy':
        return 'Manage your privacy and security';

      default:
        return 'Manage your account settings';

    }

  }




 naviagteTologin () {
      this.router.navigate(['/login']);
  }

}