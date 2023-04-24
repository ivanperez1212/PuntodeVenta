import { Component } from '@angular/core';
import { OperacionesService } from 'src/app/servicio/operaciones.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  listProduct: any;
  constructor(private servicio:OperacionesService){}
 
  ngOnInit(): void {
    this.servicio.getProduct().subscribe((res:any) =>{
      console.log(res)
      this.listProduct = res;
    })
  }   

}
