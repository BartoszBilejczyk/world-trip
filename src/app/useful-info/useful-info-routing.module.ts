import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsefulInfoComponent } from './useful-info.component'

const usefulInfoRoutes: Routes = [
  { path: 'useful-info', component: UsefulInfoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(usefulInfoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsefulInfoRoutingModule { }
