import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, CardModule],
  templateUrl: './login.html',
  styles: ``
})
export class LoginComponent {
  email = '';
  private auth = inject(AuthService);
  private router = inject(Router);

  login() {
    if (this.email) {
      this.auth.login(this.email);
      this.router.navigate(['/profile']);
    }
  }

  loginAsDemo() {
    this.auth.login('demo@tribus.com');
    this.router.navigate(['/profile']);
  }
}
