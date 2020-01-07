import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../models/remote';
import {ModalController} from '@ionic/angular';
import {CarsService} from '../../services/cars.service';

@Component({
    selector: 'app-create-reservation',
    templateUrl: './create-reservation.page.html',
    styleUrls: ['./create-reservation.page.scss'],
})
export class CreateReservationPage implements OnInit {

    @Input() car: Car;

    todayDate = (new Date()).toISOString();
    startDate: string = (new Date()).toISOString();
    endDate: string;

    reservationPrice = 0;

    isSubmitting = false;

    constructor(private modalController: ModalController,
                private carsService: CarsService) {
    }

    ngOnInit() {
        console.log('auto a reservar: ', this.car);
    }

    closeDialog() {
        this.modalController.dismiss(false);
    }

    onDatesUpdated() {
        const startDate = new Date(this.startDate);
        const endDate = new Date(this.endDate);

        const dif = endDate.getDate() - startDate.getDate();

        if (dif <= 0) {
            this.endDate = '';
            this.reservationPrice = 0;
        } else {
            this.reservationPrice = this.car.pricePerDay * dif;
        }
    }

    submitReservation() {
        if (!(this.startDate && this.endDate)) {
            return;
        }

        this.isSubmitting = true;
        this.carsService.createCarReservation(this.car.objectId, this.startDate, this.endDate).then(carReservation => {
            this.isSubmitting = false;
            console.log('OK: ', carReservation);
            this.modalController.dismiss(carReservation);
        }).catch(error => {
            this.isSubmitting = false;
            console.error('[ CreateReservation ] Could not create CarReservation: ', error);
        });
    }
}
