import { Component } from '@angular/core';
import { OperacionesService } from 'src/app/servicio/operaciones.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  summaryDay:any;
  showUpdate?:boolean;
  constructor(private service:OperacionesService){}
  
  ngOnInit(): void {
    this.showUpdate = true;
    this.service.get("products").subscribe((res:any)=> {
      console.log(res);
      this.summaryDay = res;
    })
  }
}
