import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TribusEvent } from '../../../core/models/models';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe, ButtonModule, TagModule, AvatarModule],
  templateUrl: './event-card.html',
  styles: ``
})
export class EventCard {
  @Input({ required: true }) event!: TribusEvent;

  // Fallback image in case the main one fails
  fallbackImage = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop';

  getCategoryColor(category: string): any {
    switch (category) {
      case 'Tecnología': return 'info';
      case 'Diseño': return 'danger';
      case 'Negocios': return 'success';
      case 'Social': return 'warning';
      case 'Cultura': return 'help';
      default: return 'secondary';
    }
  }

  onImageError(event: any) {
    event.target.src = this.fallbackImage;
  }
}
