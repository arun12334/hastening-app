import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Auth, RegisterRequest } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  formData: RegisterRequest = {
    name: '',
    email: '',
    password: ''
  };

  showPassword = false;
  showConfirmPassword = false;

  confirmPassword = '';

  loading = false;

  successMessage = '';
  errorMessage = '';

  constructor(
    private auth: Auth,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    console.log('Register component initialized');
  }

  // ==========================================
  // PASSWORD VISIBILITY
  // ==========================================

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  // ==========================================
  // REGISTER
  // ==========================================

  register(): void {

    console.log('========== REGISTRATION START ==========');

    // Prevent double submission
    if (this.loading) {
      console.warn('Registration already in progress');
      return;
    }

    // Clear old messages
    this.successMessage = '';
    this.errorMessage = '';

    // Clean input
    this.formData.name = this.formData.name.trim();
    this.formData.email = this.formData.email.trim();

    console.log('Form data:', {
      name: this.formData.name,
      email: this.formData.email,
      password: '********'
    });

    // ==========================================
    // NAME VALIDATION
    // ==========================================

    if (!this.formData.name) {
      this.errorMessage = 'Please enter your name.';
      this.cdr.detectChanges();
      return;
    }

    // ==========================================
    // EMAIL VALIDATION
    // ==========================================

    if (!this.formData.email) {
      this.errorMessage = 'Please enter your email.';
      this.cdr.detectChanges();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(this.formData.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      this.cdr.detectChanges();
      return;
    }

    // ==========================================
    // PASSWORD VALIDATION
    // ==========================================

    if (!this.formData.password) {
      this.errorMessage = 'Please enter your password.';
      this.cdr.detectChanges();
      return;
    }

    if (this.formData.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters.';
      this.cdr.detectChanges();
      return;
    }

    // ==========================================
    // CONFIRM PASSWORD
    // ==========================================

    if (!this.confirmPassword) {
      this.errorMessage = 'Please confirm your password.';
      this.cdr.detectChanges();
      return;
    }

    if (this.formData.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      this.cdr.detectChanges();
      return;
    }

    // ==========================================
    // START LOADING
    // ==========================================

    this.loading = true;
    this.cdr.detectChanges();

    console.log('Validation successful');
    console.log('Calling Auth.register()...');
    console.log(
      'API URL: https://hastening.org/api/register.php'
    );

    // ==========================================
    // API CALL
    // ==========================================

    this.auth.register(this.formData)
      .pipe(
        finalize(() => {

          console.log('FINALIZE: stopping loading');

          this.loading = false;

          console.log(
            'Loading value:',
            this.loading
          );

          this.cdr.detectChanges();

          console.log(
            '========== REGISTRATION END =========='
          );

        })
      )
      .subscribe({

        // ======================================
        // SUCCESS
        // ======================================

        next: (response) => {

          console.log(
            'API response received:',
            response
          );

          if (response.success) {

            console.log(
              'Registration SUCCESS'
            );

            console.log(
              'User ID:',
              response.userId
            );

            // ==================================
            // SAVE USER ID
            // ==================================

            if (response.userId) {

              localStorage.setItem(
                'user_id',
                String(response.userId)
              );

              console.log(
                'User ID saved:',
                response.userId
              );
            }

            // ==================================
            // SUCCESS MESSAGE
            // ==================================

            this.successMessage =
              response.message ||
              'Registration successful.';

            this.errorMessage = '';

            // ==================================
            // CLEAR FORM
            // ==================================

            this.formData = {
              name: '',
              email: '',
              password: ''
            };

            this.confirmPassword = '';

            this.cdr.detectChanges();

            // ==================================
            // NAVIGATE TO HOME
            // ==================================

            console.log(
              'Registration successful.'
            );

            console.log(
              'Navigating to Home page...'
            );

            setTimeout(() => {

              this.router.navigate(['/home']);

            }, 1000);

          }

          else {

            console.error(
              'Registration failed:',
              response.message
            );

            this.errorMessage =
              response.message ||
              'Registration failed. Please try again.';

            this.cdr.detectChanges();

          }

        },

        // ======================================
        // ERROR
        // ======================================

        error: (error) => {

          console.error(
            '========== REGISTRATION ERROR =========='
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

          // ==================================
          // 409
          // ==================================

          if (error.status === 409) {

            this.errorMessage =
              error.error?.message ||
              'This email is already registered.';

          }

          // ==================================
          // 400
          // ==================================

          else if (error.status === 400) {

            this.errorMessage =
              error.error?.message ||
              'Invalid registration details.';

          }

          // ==================================
          // 405
          // ==================================

          else if (error.status === 405) {

            this.errorMessage =
              'Invalid request method.';

          }

          // ==================================
          // 500
          // ==================================

          else if (error.status === 500) {

            this.errorMessage =
              'Server error. Please try again later.';

          }

          // ==================================
          // CONNECTION ERROR
          // ==================================

          else if (error.status === 0) {

            this.errorMessage =
              'Unable to connect to the server. Please check your internet connection and try again.';

          }

          // ==================================
          // OTHER ERROR
          // ==================================

          else {

            this.errorMessage =
              error.error?.message ||
              'Something went wrong. Please try again.';

          }

          this.cdr.detectChanges();

        }

      });

  }

}