import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../core/services/event.service';
import { EventCard } from '../../shared/components/event-card/event-card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EventCard, ButtonModule],
  templateUrl: './home.html',
  styles: ``
})
export class HomeComponent {
  private eventService = inject(EventService);
  events$ = this.eventService.getEvents();

  categories = ['Tecnología', 'Diseño', 'Negocios', 'Social', 'Cultura', 'Música', 'Deportes'];
}
