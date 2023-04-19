import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input()summaryDay:any;
  @Input()showTotal?:boolean;
  total:any = 0;
  constructor(){}

  ngOnInit(): void {
   console.log(this.summaryDay)
  }
 
}
