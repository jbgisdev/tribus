import { Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly TOKEN_KEY = 'meetup_token';

    // Signal to track authentication state
    readonly isAuthenticated: WritableSignal<boolean> = signal(this.hasToken());

    // Mock User Signal
    readonly currentUser: WritableSignal<any | null> = signal(null);

    constructor(private router: Router) {
        if (this.isAuthenticated()) {
            this.currentUser.set({ name: 'Demo User', email: 'demo@meetup.com', avatar: 'https://i.pravatar.cc/300' });
        }
    }

    private hasToken(): boolean {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    login(email: string): boolean {
        // Mock login logic
        localStorage.setItem(this.TOKEN_KEY, 'mock-jwt-token-' + Date.now());
        this.isAuthenticated.set(true);
        this.currentUser.set({ name: 'Demo User', email: email, avatar: 'https://i.pravatar.cc/300' });
        return true;
    }

    logout(): void {
        localStorage.removeItem(this.TOKEN_KEY);
        this.isAuthenticated.set(false);
        this.currentUser.set(null);
        this.router.navigate(['/']);
    }
}
