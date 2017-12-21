import { NgModule } from '@angular/core';
import { AppCommonModule } from '../common/common.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TimelineListComponent } from './timeline-list/timeline-list.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { JourneyDetailsComponent } from './journey-details/journey-details.component';
import { TimelineNavigationComponent } from './timeline-navigation/timeline-navigation.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule,
    MatButtonModule,
  ],
  declarations: [
    TimelineListComponent,
    TimelineItemComponent,
    JourneyDetailsComponent,
    TimelineNavigationComponent
  ]
})
export class TimelineModule { }
