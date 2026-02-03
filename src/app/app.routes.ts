import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { EventDetailComponent } from './features/event-detail/event-detail';
import { LoginComponent } from './features/auth/login/login';
import { ProfileComponent } from './features/profile/profile';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Meetup Clone - Home'
    },
    {
        path: 'event/:id',
        component: EventDetailComponent,
        title: 'Event Details'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard],
        title: 'My Profile'
    },
    { path: '**', redirectTo: '' }
];
