import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    userEmail: string;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.userEmail = this.authenticationService.getUserEmail();
    }

}
