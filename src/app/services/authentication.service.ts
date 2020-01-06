import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private user = null;

    constructor() {
    }

    public isUserAuthenticated(): boolean {
        return !!this.user; // TODO: Change to actual verification
    }

    public getUserEmail(): string {
        return this.user.email;
    }

    public logIn(email: string, password: string): Promise<boolean> {
        // TODO: Change to actual login
        return new Promise((resolve) => {
            this.user = {
                email
            };
            setTimeout(resolve, 2000, true);
        });
    }
}
