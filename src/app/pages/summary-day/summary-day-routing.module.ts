import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryDayComponent } from './summary-day.component';

const routes: Routes = [
  {
    path:'',
    component: SummaryDayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryDayRoutingModule { }
