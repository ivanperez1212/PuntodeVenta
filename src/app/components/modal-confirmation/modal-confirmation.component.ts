import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
  @Output()emptyBox: EventEmitter<any> = new EventEmitter();
  empty: boolean = false;
  constructor(private service:OperacionesService) {}

   ngOnInit(): void {
   this.modalinfo = new bootstrap.Modal(this.modalInfo?.nativeElement); 
   }
   openModal(){
    this.modalinfo.show();
  }
  success(){
  this.service.calculate(this.numberTotal,this.product).subscribe((res:any) =>{
    this.empty = true;
    this.emptyBox?.emit(this.empty)
    this.modalinfo.hide();
  })
 }
 cancelOperation(){
     this.empty =true;
    this.emptyBox?.emit(this.empty)
    this.modalinfo.hide();
 }
}