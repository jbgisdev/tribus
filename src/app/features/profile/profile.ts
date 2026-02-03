import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ButtonModule, AvatarModule],
  templateUrl: './profile.html',
  styles: ``
})
export class ProfileComponent {
  auth = inject(AuthService);
}
