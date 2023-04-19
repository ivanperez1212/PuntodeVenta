import { Component } from '@angular/core';
import { OperacionesService } from 'src/app/servicio/operaciones.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  summaryDay:any;

  constructor(private service:OperacionesService){}
  
  ngOnInit(): void {
    this.service.get().subscribe((res:any)=> {
      console.log(res);
      this.summaryDay = res;
    })
  }
}
