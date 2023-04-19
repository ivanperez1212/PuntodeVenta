import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryDayRoutingModule } from './summary-day-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { SummaryDayComponent } from './summary-day.component';
import { TotalpipePipe } from 'src/app/pipe/totalpipe.pipe';



@NgModule({
  declarations: [
    SummaryDayComponent
  ],
  imports: [
    CommonModule,
    SummaryDayRoutingModule,
    SharedModule
  ]
})
export class SummaryDayModule { }
