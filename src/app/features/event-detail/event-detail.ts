import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EventService } from '../../core/services/event.service';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, TagModule, AvatarModule, DividerModule],
  templateUrl: './event-detail.html',
  styles: ``
})
export class EventDetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(EventService);

  event$ = this.route.paramMap.pipe(
    switchMap(params => this.service.getEvent(params.get('id')!))
  );

  getSeverity(category: string): any {
    switch (category) {
      case 'Tecnología': return 'info';
      case 'Diseño': return 'danger';
      case 'Negocios': return 'success';
      case 'Social': return 'warning';
      case 'Cultura': return 'help';
      default: return 'secondary';
    }
  }
}
