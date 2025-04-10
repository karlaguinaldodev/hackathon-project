import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserNavigationHeaderComponent } from '../user-navigation-header/user-navigation-header.component';
import { EmailSubscriptionService } from '../services/email-subscription/email-subscription.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserNavigationHeaderComponent,
    FooterComponent,
  ],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss',
})
export class AboutUsPageComponent {
  emailForm: FormGroup;
  message: string = '';
  isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailSubscriptionService
  ) {
    this.emailForm = this.fb.group({
      subscriber_email: ['', [Validators.required, Validators.email]],
    });
  }
}
