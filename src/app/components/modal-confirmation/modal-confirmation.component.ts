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
  @Output()totalNumberChange: EventEmitter<any> = new EventEmitter();
  empty: boolean = false;
  change: boolean = false;
  listProduct: any;
  numberOne:any; 
  numberTwo:any;
  numberThree:any;
  numberFour:any;
  numberFive:any;
  numberSix:any;
  numberSeven:any;
  numberEight:any;
  numberNine:any;
  numberCero:any;
  concatenatedNumber: any ="";
  numberTotalChange: any;
  constructor(private service:OperacionesService) {}

   ngOnInit(): void {
   this.modalinfo = new bootstrap.Modal(this.modalInfo?.nativeElement); 
   this.modalinfoChange = new bootstrap.Modal(this.modalInfoChange?.nativeElement); 
   }  
   openModal(){
    this.modalinfo.show();  
  }
  success(){
    const today = DateTime.local().toFormat("yyyy-MM-dd HH:mm");
    this.service.calculate(this.numberTotal,this.product, today,this.price).subscribe((res:any) =>{
    this.modalinfo.hide();
    this.change = false;
    this.modalinfoChange.show();
    })
 }

 cancelOperation(){
     this.empty =true;
    this.emptyBox?.emit(this.empty)
    this.modalinfo.hide();
 }

 numberFirst(){
  this.numberOne = 1;
  console.log(this.numberOne)
  this.totalProductMetod();
 }

 numberSecond(){
   this.numberTwo = 2;
   console.log(this.numberTwo)
   this.totalProductMetod();
 }

 numberThird(){
   this.numberThree = 3;
   console.log(this.numberThree)
   this.totalProductMetod();
 }

 numberFourth (){
   this.numberFour = 4;
   console.log(this.numberFour)
   this.totalProductMetod();
 }

 numberFiveth(){
   this.numberFive = 5;
   console.log(this.numberFive)
   this.totalProductMetod();
 }

 numberSixth(){
   this.numberSix = 6;
   console.log(this.numberSix)
   this.totalProductMetod();
 }
 
 numberSeventh(){
   this.numberSeven = 7;
   console.log(this.numberSeven)
   this.totalProductMetod();
 }

 numberEighth(){
   this.numberEight = 8;
   console.log(this.numberEight)
   this.totalProductMetod();
 }

 numberNineth(){
   this.numberNine = 9;
   console.log(this.numberNine)
   this.totalProductMetod();
 }
 
 numberCeroth(){
   this.numberCero = 0;
   console.log(this.numberCero)
   this.totalProductMetod();
 }

 totalProductMetod(){
  
  if (this.numberOne != null) {
  this.concatenatedNumber += this.numberOne.toString() ;
  this.numberOne = undefined
  }
  if (this.numberTwo != null) {
  this.concatenatedNumber += this.numberTwo.toString();
  this.numberTwo = undefined
  }
  if (this.numberThree != null) {
  this.concatenatedNumber += this.numberThree.toString();
  this.numberThree = undefined
  }
  if (this.numberFour != null) {
  this.concatenatedNumber += this.numberFour.toString();
  this.numberFour = undefined
  }
  if (this.numberFive != null) {
  this.concatenatedNumber += this.numberFive.toString();
  this.numberFive = undefined
  }
  if (this.numberSix != null) {
  this.concatenatedNumber += this.numberSix.toString();
  this.numberSix = undefined
  }
  if (this.numberSeven != null) {
  this.concatenatedNumber += this.numberSeven.toString();
  this.numberSeven = undefined
  }
  if (this.numberEight != null) {
  this.concatenatedNumber += this.numberEight.toString();
  this.numberEight = undefined
  }
  if (this.numberNine != null) {
  this.concatenatedNumber += this.numberNine.toString();
  this.numberNine = undefined
  }
  if (this.numberCero != null) {
    this.concatenatedNumber += this.numberCero.toString();
    this.numberCero = undefined
    }
    this.numberTotalChange = this.concatenatedNumber;
    console.log(this.numberTotalChange);   
}

handOutChange(){
  this.empty = true; 
  this.emptyBox?.emit(this.empty);
  this.totalNumberChange?.emit(this.numberTotalChange);
  this.modalinfoChange.hide();
}

handOutChangeCancel(){
   this.empty = true; 
  this.emptyBox?.emit(this.empty);
  this.modalinfoChange.hide();
}

}