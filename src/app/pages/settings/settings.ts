import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  Auth,
  PaymentDetailsRecord,
  ProfileResponse
} from '../../services/auth';

import { Router } from '@angular/router';
import { FeatureAccess } from '../../services/feature-access';
import { PaymentHistoryEntry } from '../../services/cashfree.service';

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

type SupportTicketStatus = 'process' | 'solved' | 'completed' | 'rejected';

interface SupportTicket {
  id: string;
  subject: string;
  description: string;
  status: SupportTicketStatus;
  createdAt: string;
  updatedAt: string;
  imageName?: string;
  imageData?: string;
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
  private readonly featureAccess = inject(FeatureAccess);



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

  profilePhoneCountryCode = '';
  profilePhoneNumber = '';

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

  paymentHistory: PaymentHistoryEntry[] = this.loadPaymentHistory();

  selectedPayment: PaymentHistoryEntry | null = null;

  paymentHistoryLoading = false;

  paymentHistoryError = '';

  private loadPaymentHistory(): PaymentHistoryEntry[] {
    const storedHistory = localStorage.getItem('payment_history');

    if (!storedHistory) {
      return [];
    }

    try {
      const parsed: unknown = JSON.parse(storedHistory);
      return Array.isArray(parsed) ? parsed as PaymentHistoryEntry[] : [];
    } catch {
      return [];
    }
  }

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

  passwordUpdating = false;

  passwordResult: { success: boolean; message: string } | null = null;

  supportTickets: SupportTicket[] = this.loadSupportTickets();

  ticketModalOpen = false;

  selectedTicket: SupportTicket | null = null;

  newTicket = {
    subject: '',
    description: '',
    imageName: '',
    imageData: ''
  };

  private loadSupportTickets(): SupportTicket[] {
    const stored = localStorage.getItem('support_tickets');
    if (!stored) {
      return [
        {
          id: 'SUP-1001',
          subject: 'Unable to update profile',
          description: 'The profile information did not save after editing.',
          status: 'completed',
          createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
          updatedAt: new Date(Date.now() - 86400000 * 2).toISOString()
        },
        {
          id: 'SUP-1002',
          subject: 'Payment history question',
          description: 'Please help me understand a payment status in my account.',
          status: 'process',
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];
    }

    try {
      const parsed: unknown = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed as SupportTicket[] : [];
    } catch {
      return [];
    }
  }

  openTicketModal(): void {
    if (!this.featureAccess.requireMember()) return;
    this.ticketModalOpen = true;
  }

  closeTicketModal(): void {
    this.ticketModalOpen = false;
  }

  viewTicketDetails(ticket: SupportTicket): void {
    this.selectedTicket = ticket;
  }

  closeTicketDetails(): void {
    this.selectedTicket = null;
  }

  selectTicketImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.newTicket.imageName = file.name;
      this.newTicket.imageData = typeof reader.result === 'string' ? reader.result : '';
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  createSupportTicket(): void {
    if (!this.newTicket.subject.trim() || !this.newTicket.description.trim()) return;

    const now = new Date().toISOString();
    const ticket: SupportTicket = {
      id: `SUP-${Date.now().toString().slice(-6)}`,
      subject: this.newTicket.subject.trim(),
      description: this.newTicket.description.trim(),
      status: 'process',
      createdAt: now,
      updatedAt: now,
      imageName: this.newTicket.imageName || undefined,
      imageData: this.newTicket.imageData || undefined
    };

    this.supportTickets = [ticket, ...this.supportTickets];
    localStorage.setItem('support_tickets', JSON.stringify(this.supportTickets));
    this.newTicket = { subject: '', description: '', imageName: '', imageData: '' };
    this.ticketModalOpen = false;
  }

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
    this.loadPaymentHistoryFromApi();

  }

  private loadPaymentHistoryFromApi(): void {
    const storedProfile = localStorage.getItem('user_profile_info');
    if (!storedProfile) {
      return;
    }

    try {
      const parsed: unknown = JSON.parse(storedProfile);
      const profile = typeof parsed === 'object' && parsed !== null
        ? parsed as { users?: Array<Record<string, unknown>> }
        : undefined;
      const user = profile?.users?.[0];
      const userId = user?.['user_id'] ?? user?.['id'];
      const publicKey = user?.['public_key'] ?? user?.['publicKey'];
      const token = user?.['token'];

      if (
        (typeof userId !== 'string' && typeof userId !== 'number') ||
        typeof publicKey !== 'string' ||
        typeof token !== 'string'
      ) {
        return;
      }

      this.paymentHistoryLoading = true;
      this.auth.getPaymentDetails({
        user_id: userId,
        public_key: publicKey,
        token
      }).subscribe({
        next: (response) => {
          this.paymentHistory = (response.data ?? [])
            .map((payment) => this.toPaymentHistoryEntry(payment));
          this.paymentHistoryLoading = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.paymentHistoryError = 'Unable to load payment history.';
          this.paymentHistoryLoading = false;
          this.cdr.detectChanges();
        }
      });
    } catch {
      this.paymentHistoryError = 'Saved login data is invalid.';
    }
  }

  private toPaymentHistoryEntry(
    payment: PaymentDetailsRecord
  ): PaymentHistoryEntry {
    const paymentData = payment.payment_data;
    const payments = Array.isArray(paymentData['payments'])
      ? paymentData['payments']
      : [];
    const details = typeof payments[0] === 'object' && payments[0] !== null
      ? payments[0] as Record<string, unknown>
      : undefined;
    const method = details?.['payment_method'];
    const others = typeof method === 'object' && method !== null
      ? (method as Record<string, unknown>)['others']
      : undefined;
    const otherDetails = typeof others === 'object' && others !== null
      ? others as Record<string, unknown>
      : undefined;
    const paymentId = details?.['cf_payment_id'];
    const amount = details?.['payment_amount'] ?? paymentData['amount'];
    const orderAmount = details?.['order_amount'];
    const currency = details?.['payment_currency'] ?? details?.['order_currency'];
    const gatewayDetails = details?.['payment_gateway_details'];
    const gateway = typeof gatewayDetails === 'object' && gatewayDetails !== null
      ? (gatewayDetails as Record<string, unknown>)['gateway_name']
      : undefined;
    const message = details?.['payment_message'] ?? paymentData['message'];
    const paymentTime = details?.['payment_time'] ?? details?.['payment_completion_time'];

    return {
      orderId: payment.order_id,
      amount: typeof amount === 'number' ? amount : Number(amount) || 0,
      status: payment.payment_status,
      provider: typeof gateway === 'string' ? gateway : 'Cashfree Payments',
      createdAt: payment.created_at,
      paymentId: typeof paymentId === 'string' ? paymentId : undefined,
      message: typeof message === 'string' ? message : null,
      paymentData,
      orderAmount: typeof orderAmount === 'number' ? orderAmount : undefined,
      currency: typeof currency === 'string' ? currency : undefined,
      paymentMethod: typeof otherDetails?.['payment_mode'] === 'string'
        ? otherDetails['payment_mode']
        : undefined,
      gateway: typeof gateway === 'string' ? gateway : undefined,
      paymentTime: typeof paymentTime === 'string' ? paymentTime : undefined
    };
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
    this.splitProfilePhone(this.profile.phone);

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
  this.splitProfilePhone(this.profile.phone);
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
    if (!this.featureAccess.requireMember()) return;

    this.profile.phone = `${this.profilePhoneCountryCode.trim()} ${this.profilePhoneNumber.trim()}`.trim();
    console.log(
      'Profile updated:',
      this.profile
    );

    this.profileEditing = false;
    this.showProfileToast('Profile updated successfully.');

  }

  private splitProfilePhone(phone: string): void {
    const normalizedPhone = phone.trim();
    const countryCodeMatch = normalizedPhone.match(/^(\+\d{1,4})\s+(.+)$/);
    this.profilePhoneCountryCode = countryCodeMatch?.[1] || '';
    this.profilePhoneNumber = countryCodeMatch?.[2] || normalizedPhone;
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

    const storedProfile = localStorage.getItem('user_profile_info');
    if (!storedProfile) {
      this.showPasswordResult(false, 'Please sign in again before changing your password.');
      return;
    }

    try {
      const parsed: unknown = JSON.parse(storedProfile);
      const profile = typeof parsed === 'object' && parsed !== null
        ? parsed as { users?: Array<Record<string, unknown>> }
        : undefined;
      const user = profile?.users?.[0];
      const userId = user?.['userId'] ?? user?.['user_id'] ?? user?.['id'];
      const token = user?.['token'];
      const publicKey = user?.['publicKey'] ?? user?.['public_key'];

      if (
        (typeof userId !== 'string' && typeof userId !== 'number') ||
        typeof token !== 'string' ||
        typeof publicKey !== 'string'
      ) {
        this.showPasswordResult(false, 'Saved login data is incomplete. Please sign in again.');
        return;
      }

      const passwordRequest = {
        userId,
        token,
        publicKey,
        currentPassword: this.password.currentPassword,
        password: this.password.newPassword,
        confirmPassword: this.password.confirmPassword
      };

      console.log('Update password request:', {
        ...passwordRequest,
        token: '[REDACTED]',
        currentPassword: '[REDACTED]',
        password: '[REDACTED]',
        confirmPassword: '[REDACTED]'
      });

      this.passwordUpdating = true;
      this.auth.updatePassword(passwordRequest).subscribe({
        next: (response) => {
          console.log('Update password API response body:', {
            success: response.success,
            message: response.message
          });
          this.passwordUpdating = false;
          this.showPasswordResult(
            response.success,
            response.message || (
              response.success
                ? 'Your password was changed successfully.'
                : 'Unable to change your password.'
            )
          );
          if (response.success) {
            this.password = {
              currentPassword: '',
              newPassword: '',
              confirmPassword: ''
            };
          }
          this.cdr.detectChanges();
        },
        error: (error: HttpErrorResponse) => {
          const responseBody = error.error;
          console.error('Update password error:', {
            status: error.status,
            statusText: error.statusText,
            url: error.url,
            responseBody,
            responseHeaders: error.headers,
            message: error.message
          });
          console.error(
            'Update password API error payload:',
            typeof responseBody === 'object' && responseBody !== null
              ? {
                  success: responseBody['success'],
                  message: responseBody['message']
                }
              : responseBody
          );
          this.passwordUpdating = false;
          this.showPasswordResult(
            false,
            typeof responseBody?.message === 'string'
              ? responseBody.message
              : error.message || 'Unable to change your password.'
          );
          this.cdr.detectChanges();
        }
      });
    } catch {
      this.showPasswordResult(false, 'Saved login data is invalid. Please sign in again.');
    }

  }

  private showPasswordResult(success: boolean, message: string): void {
    this.passwordResult = { success, message };
    this.cdr.detectChanges();
  }

  closePasswordResult(): void {
    this.passwordResult = null;
    this.cdr.detectChanges();
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
    if (!this.featureAccess.requireMember()) return;

    console.log(
      'Selected language:',
      this.selectedLanguage
    );

    alert(
      `Language changed to ${this.selectedLanguage}.`
    );

  }

  viewPaymentDetails(payment: PaymentHistoryEntry): void {
    this.selectedPayment = payment;
    this.cdr.detectChanges();
  }

  closePaymentDetails(): void {
    this.selectedPayment = null;
    this.cdr.detectChanges();
  }

  // viewAllPayments(): void {
  //   document
  //     .getElementById('payment-history-list')
  //     ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // }


  
  viewAllPayments(): void {
   this.router.navigate(['/cashfree-payment']);
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
        return 'Payment Details';

      case 'appearance':
        return 'Customer Support';

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
        return 'View your payment and transaction information';

      case 'appearance':
        return 'Get help and track your support tickets';

      case 'privacy':
        return 'Manage your privacy and security';

      default:
        return 'Manage your account settings';

    }

  }

 openPrivacyPolicy(): void {
   this.router.navigate(['/privacy-policy']);
 }

 openLoginActivity(): void {
   this.router.navigate(['/account-users-login-activity']);
 }



 naviagteTologin () {
      this.router.navigate(['/login']);
  }

}