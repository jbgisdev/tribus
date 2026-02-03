export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

export interface Attendee {
    id: string;
    name: string;
    avatar?: string;
}

export interface TribusEvent {
    id: string;
    title: string;
    description: string;
    date: Date;
    location: string;
    imageUrl: string;
    price: number;
    organizer: User;
    attendees: Attendee[];
    category: 'Tecnología' | 'Diseño' | 'Negocios' | 'Social' | 'Cultura';
}
