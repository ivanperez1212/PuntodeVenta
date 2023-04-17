import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { OperacionesService } from 'src/app/servicio/operaciones.service';
declare const bootstrap: any;
@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.css']
})
export class ModalConfirmationComponent {
  @ViewChild('modalInfo',{static:true}) modalInfo?:ElementRef<HTMLDivElement>;
  modalinfo:any;
  @Input('numberTotal')numberTotal?:number;
  @Input('product')product?:string = "";
  constructor(private service:OperacionesService) {}

   ngOnInit(): void {
   this.modalinfo = new bootstrap.Modal(this.modalInfo?.nativeElement); 
   }
   openModal(){
    this.modalinfo.show();
    console.log(this.numberTotal );
    console.log(this.product)
  }

  correcto(){
  this.service.calculate(this.numberTotal,this.product).subscribe((res:any) =>{
    console.log(res)
    this.modalinfo.hide()
  })
 }
}