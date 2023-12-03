import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse, SignupRequest } from '../types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5135/auth'

  constructor(private http: HttpClient) { }
  
  public async login(data: LoginRequest): Promise<Observable<LoginResponse>> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/signIn`, data, { withCredentials: true });
  }

  public async signUp(data: SignupRequest): Promise<Observable<LoginResponse>> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/signUp`, data, { withCredentials: true });
  }
}
