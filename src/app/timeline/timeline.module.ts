import { NgModule } from '@angular/core';
import { AppCommonModule } from "../common/common.module";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { TimelineListComponent } from './timeline-list/timeline-list.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { JourneyDetailsComponent } from './journey-details/journey-details.component';


@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule
  ],
  declarations: [
    TimelineListComponent,
    TimelineItemComponent,
    JourneyDetailsComponent
  ]
})
export class TimelineModule { }
