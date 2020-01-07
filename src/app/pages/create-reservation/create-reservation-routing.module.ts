import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateReservationPage } from './create-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: CreateReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateReservationPageRoutingModule {}
