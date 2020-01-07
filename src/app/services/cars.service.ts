import {Injectable} from '@angular/core';
import {Car} from '../models/remote';

const CarsStore = Backendless.Data.of('Cars');

@Injectable({
    providedIn: 'root'
})
export class CarsService {

    constructor() {
    }

    public getAvailableCars(): Promise<Car[]> {
        return CarsStore.find<Car>();
    }
}
