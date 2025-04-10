import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-organizer-navigation-header',
  standalone: true,
  imports: [
    RouterLink, 
    CommonModule
  ],
  templateUrl: './organizer-navigation-header.component.html',
  styleUrl: './organizer-navigation-header.component.scss'
})
export class OrganizerNavigationHeaderComponent {
  isDropdownOpen = false;
  userData: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.userData = this.authService.getUserData();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log('Dropdown toggled:', this.isDropdownOpen);
  }

  logout() {
    console.log('User logged out');
    this.authService.logout(); // This will clear the user data and redirect to login
  }
}