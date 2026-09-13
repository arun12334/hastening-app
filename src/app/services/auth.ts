import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// ==========================================
// REGISTER
// ==========================================

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;

  user?: {
    id: number;
    name: string;
    email: string;
    publicKey: string;
    token: string;
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
    data: RegisterRequest
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