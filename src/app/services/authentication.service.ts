import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private user: Backendless.User = null;

    constructor() {
    }

    public isUserAuthenticated(): boolean {
        return Backendless.UserService.isValidLoginSync();
    }

    public logIn(email: string, password: string): Promise<boolean> {
        return Backendless.UserService.login(email, password, true)
            .then((loggedInUser) => {
                this.user = loggedInUser;
                console.log(loggedInUser);
                return true;
            })
            .catch((error) => {
                return false;
            });
    }

    public logOut(): Promise<void> {
        return Backendless.UserService.logout();
    }
}
