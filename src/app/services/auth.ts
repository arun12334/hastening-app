import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  userId?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  userId?: string;
  name?: string;
  email?: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = 'https://hastening.org/api';

  constructor(
    private http: HttpClient
  ) {}

  // ==============================
  // REGISTER
  // ==============================

  register(
    data: RegisterRequest
  ): Observable<RegisterResponse> {

    return this.http.post<RegisterResponse>(
      `${this.apiUrl}/register.php`,
      data
    );
  }

  // ==============================
  // LOGIN
  // ==============================

  login(
    data: LoginRequest
  ): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login.php`,
      data
    );
  }
}