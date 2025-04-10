// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/users/user.service';
import { UserModel } from '../models/user.model';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router, 
    private userService: UserService,
    private authService: AuthService
  ) {}

  loginUser() {
    const user: UserModel = {
      username: this.username,
      password: this.password
    };
  
    this.userService.login(user).subscribe({
      next: (res: any) => {
        console.log('Login successful:', res);
        // Save user data in AuthService
        this.authService.setUserData(res);
        this.router.navigate(['/organizer/events']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid username or password.');
      }
    });
  }
}