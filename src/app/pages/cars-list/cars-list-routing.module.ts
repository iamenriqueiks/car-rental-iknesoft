import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsListPage } from './cars-list.page';

const routes: Routes = [
  {
    path: '',
    component: CarsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsListPageRoutingModule {}
