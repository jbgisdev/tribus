import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, CardModule],
  templateUrl: './login.html',
  styles: ``
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  get email() {
    return this.loginForm.get('email');
  }

  login() {
    if (this.loginForm.valid) {
      this.auth.login(this.email?.value || '');
      this.router.navigate(['/profile']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  loginAsDemo() {
    this.auth.login('demo@tribus.com');
    this.router.navigate(['/profile']);
  }

  loginWithGoogle() {
    // Simulate Google Login
    this.auth.login('google-user@gmail.com');
    this.router.navigate(['/profile']);
  }
}
