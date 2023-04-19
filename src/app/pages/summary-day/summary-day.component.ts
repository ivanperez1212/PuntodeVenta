import { Component } from '@angular/core';
import { OperacionesService } from 'src/app/servicio/operaciones.service';
@Component({
  selector: 'app-summary-day',
  templateUrl: './summary-day.component.html',
  styleUrls: ['./summary-day.component.css']
})
export class SummaryDayComponent {
  summaryDay:any;
  showTotal?:boolean;
  constructor(private service:OperacionesService){}

  ngOnInit(): void {
    this.dayTotal();
    this.showTotal = true;
  }

  dayTotal(){
    this.service.get().subscribe((res:any) => {
     this.summaryDay = res;
    })
  }

}
