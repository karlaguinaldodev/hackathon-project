// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const url = state.url;

  if (authService.isLoggedIn()) {
    return true;
  }

  // Custom alert messages based on the route
  if (url.includes('organizer/events/update')) {
    alert('Access denied! Only administrators can edit events. Please log in with admin credentials.');
  } else if (url.includes('organizer/events/new')) {
    alert('Access denied! Only administrators can create new events. Please log in with admin credentials.');
  } else if (url.includes('organizer/events')) {
    alert('Access denied! Only administrators can access the events management page. Please log in with admin credentials.');
  } else {
    alert('Access denied! Please log in to view this page.');
  }
  
  // Redirect to login page
  router.navigate(['/login']);
  return false;
};