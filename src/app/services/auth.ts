import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// ==========================================
// REGISTER
// ==========================================

export interface DetailedRegisterRequest {
  personalInformation: {
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
    password: string;
    confirmPassword: string;
  };
  registrationOptions: Array<{
    id: number;
    title: string;
    deliveryMethod: string | null;
  }>;
  children: Array<{
    name: string;
    age: number;
  }>;
  termsAndConditions: Array<{
    id: number;
    text: string;
    checked: boolean;
  }>;
  locationGroups: {
    primary: string;
    secondary: string | null;
  };
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export type RegistrationRequest = RegisterRequest | DetailedRegisterRequest;

export interface RegisterResponse {
  success: boolean;
  message: string;
  user?: {
    id: number;
    name?: string;
    email?: string;
    publicKey?: string;
    token?: string;
  };
  emailSent?: boolean;
}

// ==========================================
// LOGIN
// ==========================================

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  count?: number;
  users?: Array<{
    personalInformation: {
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
    registrationOptions: Array<{
      id: number;
      title: string;
      deliveryMethod: string | null;
    }>;
    children: Array<{
      name: string;
      age: number;
    }>;
    termsAndConditions: Array<{
      id: number;
      text: string;
      checked: boolean;
    }>;
    locationGroups: {
      primary: string;
      secondary: string | null;
    };
    id: number;
    name: string;
    email: string;
    publicKey: string;
    token: string;
    created_at: string;
  }>;
}

// ==========================================
// PROFILE
// ==========================================

export interface ProfileRequest {
  id: number;
  token: string;
  publicKey: string;
}

export interface ProfileResponse {
  success: boolean;
  message: string;

  user?: {
    id: number;
    name: string;
    email: string;
    publicKey: string;
    token: string;
    created_at: string;
  };
}

// ==========================================
// AUTH SERVICE
// ==========================================

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = 'https://hastening.org/api';

  constructor(
    private http: HttpClient
  ) {}

  // ==========================================
  // REGISTER
  // ==========================================

  register(
    data: RegistrationRequest
  ): Observable<RegisterResponse> {

    return this.http.post<RegisterResponse>(
      `${this.apiUrl}/register.php`,
      data
    );
  }

  // ==========================================
  // LOGIN
  // ==========================================

  login(
    data: LoginRequest
  ): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login.php`,
      data
    );
  }

  // ==========================================
  // GET PROFILE
  // ==========================================

  getProfile(
    data: ProfileRequest
  ): Observable<ProfileResponse> {

    return this.http.post<ProfileResponse>(
      `${this.apiUrl}/profile.php`,
      data
    );
  }
}