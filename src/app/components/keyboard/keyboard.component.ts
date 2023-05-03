import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
  @Input('productButton')productButton:string = "";
  @Input('price')price:number = 0;
  @Output() numberTotalEmit: EventEmitter<any> = new EventEmitter();
  @Output()priceEmit: EventEmitter<any> = new EventEmitter();
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
  numberHaft:any;
  numberTotal:any;
  concatenatedNumber: any ="";
  emptyBox: boolean = false;
  show: boolean = false;

  constructor(){}


  showKeyboard(show:any){
    this.show = show;
  }
  numberFirst(){
    this.numberOne = 1;
    console.log(this.numberOne)
    this.totalChikenMetod();
   }
   numberSecond(){
     this.numberTwo = 2;
     console.log(this.numberTwo)
     this.totalChikenMetod();
   }
   numberThird(){
     this.numberThree = 3;
     console.log(this.numberThree)
     this.totalChikenMetod();
   }
   numberFourth (){
     this.numberFour = 4;
     console.log(this.numberFour)
     this.totalChikenMetod();
   }
   numberFiveth(){
     this.numberFive = 5;
     console.log(this.numberFive)
     this.totalChikenMetod();
   }
   numberSixth(){
     this.numberSix = 6;
     console.log(this.numberSix)
     this.totalChikenMetod();
   }
   numberSeventh(){
     this.numberSeven = 7;
     console.log(this.numberSeven)
     this.totalChikenMetod();
   }
   numberEighth(){
     this.numberEight = 8;
     console.log(this.numberEight)
     this.totalChikenMetod();
   }
   numberNineth(){
     this.numberNine = 9;
     console.log(this.numberNine)
     this.totalChikenMetod();
   }
   numberCeroth(){
     this.numberCero = 0;
     console.log(this.numberCero)
     this.totalChikenMetod();
   }
   numberHaftth(){
    this.numberHaft = .5;
    console.log(this.numberHaft)
    this.totalChikenMetod();
   }

   onEmptyBox(emptyBox: any){
    if(emptyBox == true ){
     this.concatenatedNumber = "";
     this.numberOne = undefined;
     this.numberTwo =  undefined;
     this.numberThree =  undefined;
     this.numberFive =  undefined;
     this.numberSix = undefined;
     this.numberSeven = undefined;
     this.numberEight = undefined;
     this.numberNine = undefined;
     this.numberCero = undefined;
     this.numberHaft = undefined;
     this.numberTotal = this.concatenatedNumber;
     this.show = false;
    }
   }

   totalChikenMetod(){
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
    if (this.numberHaft != null) {
      this.concatenatedNumber = parseInt(this.concatenatedNumber)
      if(this.concatenatedNumber){
        this.concatenatedNumber += this.numberHaft;
        this.numberHaft = undefined
      }else
      {
        this.concatenatedNumber = this.numberHaft;
      }
    
    }
      this.numberTotal = this.concatenatedNumber;
      console.log(this.numberTotal);   
}

ontotalNumberEmit(value:any){
 this.numberTotalEmit.emit(value);
}
onpriceEmit(value:any){
this.priceEmit.emit(value);
}
}