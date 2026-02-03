import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MeetupEvent } from '../../../core/models/models';
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
  @Input({ required: true }) event!: MeetupEvent;

  getCategoryColor(category: string): any {
    switch (category) {
      case 'Technology': return 'info';
      case 'Design': return 'danger';
      case 'Business': return 'success';
      case 'Social': return 'warning';
      default: return 'secondary';
    }
  }
}
