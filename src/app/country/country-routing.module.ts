import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { LivingCostsComponent } from './living-costs/living-costs.component';
import { BudgetComponent} from './budget/budget.component';
import { SightseeingComponent} from './sightseeing/sightseeing.component';

const countryRoutes: Routes = [
  {
    path: 'country',
    component: CountryComponent,
    children: [
      {
        path: 'basic-info',
        component: BasicInfoComponent
      },
      {
        path: 'living-cost',
        component: LivingCostsComponent
      },
      {
        path: 'budget',
        component:  BudgetComponent
      },
      {
        path: 'sightseeing',
        component: SightseeingComponent
      }
    ]
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
