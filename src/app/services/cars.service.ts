import {Injectable} from '@angular/core';
import {Car, CarReservation} from '../models/remote';
import {AuthenticationService} from './authentication.service';

const CarsStore = Backendless.Data.of('Cars');
const CarReservationsStore = Backendless.Data.of('CarReservations');

@Injectable({
    providedIn: 'root'
})
export class CarsService {

    constructor(private authenticationService: AuthenticationService) {
    }

    public getAvailableCars(): Promise<Car[]> {
        return CarsStore.find<Car>();
    }

    public createCarReservation(carObjectId: string, startDate: string, endDate: string): Promise<CarReservation> {
        let carReservationObjectId;
        return CarReservationsStore.save<any>({startDate, endDate}).then(carReservation => {
            carReservationObjectId = carReservation.objectId;
            return CarReservationsStore.setRelation(carReservation, 'car', [carObjectId]);
        }).then(() => {
            const queryBuilder = Backendless.DataQueryBuilder.create();
            queryBuilder.setRelated(['car'])
                .setWhereClause(`objectId = '${carReservationObjectId}'`);

            return CarReservationsStore.find<CarReservation>(queryBuilder);
        }).then(result => {
            if (result.length) {
                return result[0];
            }
        });
    }
}
