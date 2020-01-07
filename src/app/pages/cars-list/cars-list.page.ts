import {Component, OnInit} from '@angular/core';
import {CarsService} from '../../services/cars.service';
import {Car} from '../../models/remote';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {CreateReservationPage} from '../create-reservation/create-reservation.page';

@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.page.html',
    styleUrls: ['./cars-list.page.scss'],
})
export class CarsListPage implements OnInit {

    isLoadingCars = false;
    cars: Car[];

    constructor(private router: Router,
                private modalController: ModalController,
                private carsService: CarsService) {
    }

    ngOnInit() {
        this.isLoadingCars = true;
        this.carsService.getAvailableCars().then(cars => {
            this.isLoadingCars = false;
            this.cars = cars;
        }).catch(error => {
            console.error('[ CarsList ] Could not load cars list: ', error);
            this.isLoadingCars = false;
            this.cars = [];
        });
    }

    openReservation(car: Car) {
        this.modalController.create({
            component: CreateReservationPage,
            componentProps: {car}
        }).then(modal => {
            modal.onDidDismiss().then(exitValue => {
                console.log('modal cerró con :', exitValue);
            });
            return modal.present();
        });
    }
}
