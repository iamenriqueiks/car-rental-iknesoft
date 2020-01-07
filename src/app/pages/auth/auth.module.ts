import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AuthPageRoutingModule} from './auth-routing.module';

import {AuthPage} from './auth.page';
import {CreateReservationPageModule} from '../create-reservation/create-reservation.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthPageRoutingModule,
        CreateReservationPageModule
    ],
    declarations: [AuthPage]
})
export class AuthPageModule {
}
