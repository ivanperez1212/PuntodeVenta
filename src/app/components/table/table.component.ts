import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OperacionesService } from 'src/app/servicio/operaciones.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input()summaryDay:any;
  @Input()showTotal?:boolean;
  @Input()showUpdate?:boolean;
  total:any = 0;
  constructor(private router:Router,private service: OperacionesService){}

  ngOnInit(): void {
   console.log(this.summaryDay)
  }

  update(value:any){
    console.log(value)
    this.router.navigate(['/update-product',value]);
  }

  delete(value:any){
    console.log("holi")
    this.service.delete(value).subscribe(res => res);
    
    this.ngOnInit();
  }
 
}
