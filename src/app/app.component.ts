import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'puntoDeVenta';

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
  numberTotal:any;
  constructor(){}

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

  totalChikenMetod(){
    if (this.numberOne != null || this.numberTwo != null || this.numberThree != null || this.numberFour != null || this.numberFive != null ||
      this.numberSix != null || this.numberSeven != null || this.numberEight != null || this.numberNine != null) {
      
      let concatenatedNumber = "";
      if (this.numberOne != null) {
      concatenatedNumber += this.numberOne.toString();
      }
      if (this.numberTwo != null) {
      concatenatedNumber += this.numberTwo.toString();
      }
      if (this.numberThree != null) {
      concatenatedNumber += this.numberThree.toString();
      }
      if (this.numberFour != null) {
      concatenatedNumber += this.numberFour.toString();
      }
      if (this.numberFive != null) {
      concatenatedNumber += this.numberFive.toString();
      }
      if (this.numberSix != null) {
      concatenatedNumber += this.numberSix.toString();
      }
      if (this.numberSeven != null) {
      concatenatedNumber += this.numberSeven.toString();
      }
      if (this.numberEight != null) {
      concatenatedNumber += this.numberEight.toString();
      }
      if (this.numberNine != null) {
      concatenatedNumber += this.numberNine.toString();
      }
      this.numberTotal = concatenatedNumber;
      console.log(this.numberTotal)
      }

  }

}
