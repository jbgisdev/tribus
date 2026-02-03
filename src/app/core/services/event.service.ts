import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MeetupEvent } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private events: MeetupEvent[] = [
        {
            id: '1',
            title: 'Tech Talk: Angular Revolution',
            description: 'Join us for a deep dive into the latest features of Angular 19+ including Signals, Standalone Components, and the new build system.',
            date: new Date(new Date().setDate(new Date().getDate() + 5)), // 5 days from now
            location: 'Innovation Hub, New York, NY',
            imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
            price: 0,
            category: 'Technology',
            organizer: { id: 'u1', name: 'Angular NYC', email: 'org@angularqa.com', avatar: 'https://cdn.iconscout.com/icon/free/png-256/free-angular-3-226070.png' },
            attendees: []
        },
        {
            id: '2',
            title: 'Design Systems Workshop',
            description: 'Learn how to build scalable design systems using Tailwind CSS and Figma. A hands-on workshop for designers and developers.',
            date: new Date(new Date().setDate(new Date().getDate() + 12)),
            location: 'Creative Loft, Brooklyn, NY',
            imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e0c766?q=80&w=1964&auto=format&fit=crop',
            price: 50,
            category: 'Design',
            organizer: { id: 'u2', name: 'Design Matters', email: 'hello@designmatters.com' },
            attendees: []
        },
        {
            id: '3',
            title: 'Startup Networking Night',
            description: 'Meet local founders, investors, and talent. A great opportunity to grow your network and find your next big opportunity.',
            date: new Date(new Date().setDate(new Date().getDate() + 2)),
            location: 'The Hive, Austin, TX',
            imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop',
            price: 15,
            category: 'Business',
            organizer: { id: 'u3', name: 'Startup Austin', email: 'info@startup.com' },
            attendees: []
        },
        {
            id: '4',
            title: 'Hiking Adventure: Bear Mountain',
            description: 'A moderate hike for nature lovers. Bring water and good shoes. We will meet at the trailhead at 9 AM.',
            date: new Date(new Date().setDate(new Date().getDate() + 7)),
            location: 'Bear Mountain State Park',
            imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop',
            price: 0,
            category: 'Social',
            organizer: { id: 'u4', name: 'Nature Club', email: 'hike@nature.com' },
            attendees: []
        },
        {
            id: '5',
            title: 'AI & Machine Learning Mixer',
            description: 'Discuss the future of AI with experts in the field. Pizza and drinks provided.',
            date: new Date(new Date().setDate(new Date().getDate() + 20)),
            location: 'Tech Square, San Francisco, CA',
            imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
            price: 25,
            category: 'Technology',
            organizer: { id: 'u5', name: 'SF AI Group', email: 'ai@sf.com' },
            attendees: []
        }
    ];

    constructor() { }

    getEvents(): Observable<MeetupEvent[]> {
        return of(this.events);
    }

    getEvent(id: string): Observable<MeetupEvent | undefined> {
        const event = this.events.find(e => e.id === id);
        return of(event);
    }
}
