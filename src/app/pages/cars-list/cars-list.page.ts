import {Component, OnInit} from '@angular/core';
import {CarsService} from '../../services/cars.service';
import {Car} from '../../models/remote';

@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.page.html',
    styleUrls: ['./cars-list.page.scss'],
})
export class CarsListPage implements OnInit {

    isLoadingCars = false;
    cars: Car[];

    constructor(private carsService: CarsService) {
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

    openReservation() {
        console.log('abrir reservacion!');
    }
}
