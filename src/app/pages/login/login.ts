import {
  Component,
  ChangeDetectorRef
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  CommonModule
} from '@angular/common';

import {
  finalize
} from 'rxjs/operators';

import {
  Auth
} from '../../services/auth';

import { Router } from '@angular/router';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  userId?: string;
  token?: string;
}

@Component({
  selector: 'app-login',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './login.html',

  styleUrl: './login.scss'
})
export class Login {

  formData: LoginRequest = {
    email: '',
    password: ''
  };

  rememberMe = false;

  showPassword = false;

  loading = false;

  successMessage = '';

  errorMessage = '';


  constructor(
    private auth: Auth,
    private cdr: ChangeDetectorRef,
      private router: Router
  ) {

    console.log(
      'Login component initialized'
    );

  }


  // =========================================
  // PASSWORD TOGGLE
  // =========================================

  togglePassword(): void {

    this.showPassword =
      !this.showPassword;

  }


  // =========================================
  // LOGIN
  // =========================================

  login(): void {

    console.log(
      '========== LOGIN START =========='
    );


    // Prevent double click

    if (this.loading) {

      console.warn(
        'Login already in progress'
      );

      return;

    }


    // Clear messages

    this.successMessage = '';

    this.errorMessage = '';


    // Clean email

    this.formData.email =
      this.formData.email.trim();


    console.log(
      'Login data:',
      {
        email: this.formData.email,
        password: '********',
        rememberMe: this.rememberMe
      }
    );


    // =========================================
    // EMAIL VALIDATION
    // =========================================

    if (!this.formData.email) {

      this.errorMessage =
        'Please enter your email address.';

      this.cdr.detectChanges();

      return;

    }


    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
      !emailPattern.test(
        this.formData.email
      )
    ) {

      this.errorMessage =
        'Please enter a valid email address.';

      this.cdr.detectChanges();

      return;

    }


    // =========================================
    // PASSWORD VALIDATION
    // =========================================

    if (!this.formData.password) {

      this.errorMessage =
        'Please enter your password.';

      this.cdr.detectChanges();

      return;

    }


    if (
      this.formData.password.length < 6
    ) {

      this.errorMessage =
        'Password must be at least 6 characters.';

      this.cdr.detectChanges();

      return;

    }


    // =========================================
    // START LOADING
    // =========================================

    this.loading = true;

    this.cdr.detectChanges();


    console.log(
      'Validation successful'
    );

    console.log(
      'Calling Auth.login()...'
    );

    console.log(
      'API URL: https://hastening.org/api/login.php'
    );


    // =========================================
    // API REQUEST
    // =========================================

    this.auth.login(this.formData)
      .pipe(

        finalize(() => {

          console.log(
            'FINALIZE: stopping loading'
          );

          this.loading = false;

          this.cdr.detectChanges();

          console.log(
            'Loading value:',
            this.loading
          );

          console.log(
            '========== LOGIN END =========='
          );

        })

      )
      .subscribe({

        // =====================================
        // SUCCESS
        // =====================================

     next: (response: LoginResponse) => {

  console.log('Login API response:', response);

  if (response.success) {

    console.log('LOGIN SUCCESS');

    this.successMessage =
      response.message || 'Login successful.';

    // ==========================================
    // STORE TOKEN
    // ==========================================

    if (response.token) {

      localStorage.setItem(
        'auth_token',
        response.token
      );

    }

    // ==========================================
    // STORE USER ID
    // ==========================================

    if (response.userId) {

      localStorage.setItem(
        'user_id',
        response.userId
      );

    }

    // ==========================================
    // REMEMBER ME
    // ==========================================

    localStorage.setItem(
      'remember_me',
      String(this.rememberMe)
    );

    this.cdr.detectChanges();

    console.log('Login data stored');

    // ==========================================
    // NAVIGATE TO HOME
    // ==========================================

    setTimeout(() => {

      console.log('Navigating to home...');

      this.router.navigate(['/home']);

    }, 500);

  } else {

    console.error(
      'Login failed:',
      response.message
    );

    this.errorMessage =
      response.message ||
      'Login failed. Please try again.';

    this.cdr.detectChanges();

  }

},


        // =====================================
        // ERROR
        // =====================================

        error: (error) => {

          console.error(
            '========== LOGIN ERROR =========='
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


          // ===================================
          // INVALID LOGIN
          // ===================================

          if (
            error.status === 401
          ) {

            this.errorMessage =
              error.error?.message ||
              'Invalid email or password.';

          }


          // ===================================
          // VALIDATION
          // ===================================

          else if (
            error.status === 400
          ) {

            this.errorMessage =
              error.error?.message ||
              'Please check your login details.';

          }


          // ===================================
          // METHOD
          // ===================================

          else if (
            error.status === 405
          ) {

            this.errorMessage =
              'Invalid request method.';

          }


          // ===================================
          // SERVER
          // ===================================

          else if (
            error.status === 500
          ) {

            this.errorMessage =
              'Server error. Please try again later.';

          }


          // ===================================
          // NETWORK
          // ===================================

          else if (
            error.status === 0
          ) {

            this.errorMessage =
              'Unable to connect to the server. Please check your internet connection and try again.';

          }


          // ===================================
          // OTHER
          // ===================================

          else {

            this.errorMessage =
              error.error?.message ||
              'Something went wrong. Please try again.';

          }


          this.cdr.detectChanges();

        }

      });

  }



  exploreDemo(): void {

  console.log('Guest demo mode selected');

  localStorage.setItem(
    'guest_mode',
    'true'
  );

  this.router.navigate(['/home']);
}

}