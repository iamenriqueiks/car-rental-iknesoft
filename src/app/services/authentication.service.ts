import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor() {
    }

    public isUserAuthenticated(): boolean {
        return false; // TODO: Change to actual verification
    }
}
