export interface Car extends Backendless.DataItemI {
    make: string;
    model: string;
    year: number;
    color: string;
    pricePerDay: number;
}

export interface CarReservation extends Backendless.DataItemI {
    startDate: string;
    endDate: string;
    car: Car;
}
