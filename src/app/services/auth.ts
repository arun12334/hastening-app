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
    deliveryMethod?: string | null;
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

export interface LoginUser {
  id?: number | string;
  user_id?: number | string;
  name: string;
  email: string;
  public_key: string;
  token: string;
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

export interface PaymentDetailsRequest {
  user_id: number | string;
  public_key: string;
  token: string;
  order_id?: string;
  payment_status?: string;
  payment_data?: unknown;
}

export interface PaymentDetailsRecord {
  id: number;
  order_id: string;
  user_id: number | string;
  public_key: string;
  payment_status: string;
  payment_data: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface PaymentDetailsResponse {
  status: boolean;
  message: string;
  total_count?: number;
  order_id?: string;
  data?: PaymentDetailsRecord[];
}

export interface UpdatePasswordRequest {
  userId: number | string;
  token: string;
  publicKey: string;
  currentPassword: string;
  password: string;
  confirmPassword: string;
}

export interface UpdatePasswordResponse {
  success: boolean;
  message: string;
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

  getPaymentDetails(
    data: PaymentDetailsRequest
  ): Observable<PaymentDetailsResponse> {
    return this.http.post<PaymentDetailsResponse>(
      `${this.apiUrl}/paymentdetails.php`,
      data
    );
  }

  savePaymentDetails(
    data: Required<Pick<PaymentDetailsRequest, 'user_id' | 'public_key' | 'token'>> &
      Pick<PaymentDetailsRequest, 'order_id' | 'payment_status' | 'payment_data'>
  ): Observable<PaymentDetailsResponse> {
    return this.http.post<PaymentDetailsResponse>(
      `${this.apiUrl}/paymentdetails.php`,
      data
    );
  }

  updatePassword(
    data: UpdatePasswordRequest
  ): Observable<UpdatePasswordResponse> {
    return this.http.post<UpdatePasswordResponse>(
      `${this.apiUrl}/update-password.php`,
      data
    );
  }
}