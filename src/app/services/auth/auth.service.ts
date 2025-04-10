// src/app/services/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) {}

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.hasToken();
  }

  // Save user data to localStorage on login
  setUserData(userData: any): void {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');
    this.isAuthenticatedSubject.next(true);
  }

  // Remove user data on logout
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  // Get current user data
  getUserData(): any {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  // Check if token exists in localStorage
  private hasToken(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}