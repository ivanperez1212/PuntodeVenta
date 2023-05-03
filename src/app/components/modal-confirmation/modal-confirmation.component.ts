import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { OperacionesService } from 'src/app/servicio/operaciones.service';
import { DateTime } from 'luxon';
declare const bootstrap: any;
@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.css']
})
export class ModalConfirmationComponent {
  @ViewChild('modalInfo',{static:true}) modalInfo?:ElementRef<HTMLDivElement>;
  @ViewChild('modalInfoChange',{static:true}) modalInfoChange?:ElementRef<HTMLDivElement>;
  modalinfo:any;
  modalinfoChange:any;  
  @Input('numberTotal')numberTotal?:number;
  @Input('product')product?:string = "";
  @Input('price')price?:number = 0;
  @Output()emptyBox: EventEmitter<any> = new EventEmitter();
  @Output()numberTotalEmit: EventEmitter<any> = new EventEmitter();
  @Output()priceEmit: EventEmitter<any> = new EventEmitter();
  empty: boolean = false;
  listProduct: any;
  numberTotalChange: any;

  constructor(private service:OperacionesService) {}

   ngOnInit(): void {
   this.modalinfo = new bootstrap.Modal(this.modalInfo?.nativeElement); 
   }  

   openModal(){
    this.modalinfo.show();  
   }

  success(){
    const today = DateTime.local().toFormat("yyyy-MM-dd HH:mm");
    this.service.calculate(this.numberTotal,this.product, today,this.price).subscribe((res:any) =>{
    this.modalinfo.hide();
    })
    this.numberTotalEmit?.emit(this.numberTotal);
    this.priceEmit?.emit(this.price);
    this.empty =true;
    this.emptyBox?.emit(this.empty)
 }

 cancelOperation(){
     this.empty =true;
    this.emptyBox?.emit(this.empty)
    this.modalinfo.hide();
 }

}