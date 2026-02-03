import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TribusEvent } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private events: TribusEvent[] = [
        {
            id: '1',
            title: 'Charla Técnica: Revolución Angular',
            description: 'Únete a nosotros para profundizar en las últimas características de Angular 19+, incluyendo Signals, Componentes Standalone y el nuevo sistema de construcción.',
            date: new Date('2026-02-15T18:00:00'),
            location: 'Centro de Innovación, Bogotá',
            imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop', // Coding/Tech
            price: 0,
            category: 'Tecnología',
            organizer: { id: 'u1', name: 'Angular Colombia', email: 'org@angularqa.com', avatar: 'https://cdn.iconscout.com/icon/free/png-256/free-angular-3-226070.png' },
            attendees: []
        },
        {
            id: '2',
            title: 'Taller de Sistemas de Diseño',
            description: 'Aprende a construir sistemas de diseño escalables usando Tailwind CSS y Figma. Un taller práctico para diseñadores y desarrolladores.',
            date: new Date('2026-02-20T10:00:00'),
            location: 'WeWork 93, Bogotá',
            imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop', // Design
            price: 50,
            category: 'Diseño',
            organizer: { id: 'u2', name: 'Design Matters', email: 'hello@designmatters.com' },
            attendees: []
        },
        {
            id: '6',
            title: 'Batalla de Flores 2026',
            description: 'El evento más importante del Carnaval de Barranquilla. Un desfile lleno de color, música, danzas y tradición. ¡No te lo puedes perder!',
            date: new Date('2026-02-14T12:00:00'),
            location: 'Vía 40, Barranquilla',
            imageUrl: 'https://carnavaldebarranquilla.org/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-01-at-8.04.55-PM.jpeg', // Carnival Reliable
            price: 150,
            category: 'Cultura',
            organizer: { id: 'u6', name: 'Carnaval S.A.S', email: 'info@carnaval.com' },
            attendees: []
        },
        {
            id: '7',
            title: 'Gran Parada de Tradición',
            description: 'Disfruta de la riqueza folclórica del Caribe colombiano. Cumbias, congos, garabatos y mapalos se toman la Vía 40.',
            date: new Date('2026-02-15T13:00:00'),
            location: 'Vía 40, Barranquilla',
            imageUrl: 'https://carnavaldebarranquilla.org/wp-content/uploads/2025/03/EAR09655-1-2048x1365.jpeg', // Carnival Colorful (Costumes)
            price: 100,
            category: 'Cultura',
            organizer: { id: 'u6', name: 'Carnaval S.A.S', email: 'info@carnaval.com' },
            attendees: []
        },
        {
            id: '3',
            title: 'Noche de Networking Startup',
            description: 'Conoce fundadores, inversores y talento local. Una gran oportunidad para hacer crecer tu red.',
            date: new Date('2026-02-18T19:00:00'),
            location: 'Ruta N, Medellín',
            imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop', // Business
            price: 15,
            category: 'Negocios',
            organizer: { id: 'u3', name: 'Startup Colombia', email: 'info@startup.com' },
            attendees: []
        },
        {
            id: '4',
            title: 'Caminata Ecológica: Chingaza',
            description: 'Una caminata moderada para amantes de la naturaleza. Trae agua y buenos zapatos.',
            date: new Date('2026-03-01T07:00:00'),
            location: 'Parque Nacional Chingaza',
            imageUrl: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop', // Paramo/Nature
            price: 0,
            category: 'Social',
            organizer: { id: 'u4', name: 'Club de Caminantes', email: 'hike@nature.com' },
            attendees: []
        }
    ];

    constructor() { }

    getEvents(): Observable<TribusEvent[]> {
        return of(this.events);
    }

    getEvent(id: string): Observable<TribusEvent | undefined> {
        const event = this.events.find(e => e.id === id);
        return of(event);
    }
}
