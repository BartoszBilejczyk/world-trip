import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard.component";

const dashboardRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
