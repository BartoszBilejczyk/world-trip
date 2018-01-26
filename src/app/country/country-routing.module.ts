import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country.component';

const countryRoutes: Routes = [
  {
    path: 'country',
    component: CountryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(countryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CountryRoutingModule { }
