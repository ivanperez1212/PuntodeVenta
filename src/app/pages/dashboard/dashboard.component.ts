import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { OperacionesService } from 'src/app/servicio/operaciones.service';
declare const bootstrap: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('modalInfoChange',{static:true}) modalInfoChange?:ElementRef<HTMLDivElement>;
  @Output()emptyBox: EventEmitter<any> = new EventEmitter();
  change: boolean = false;
  listProduct: any;
  numberOne:number | undefined;
  numberTwo:number | undefined;
  numberFive:number | undefined;
  numbertTen:number | undefined;
  numberTwenty:number | undefined;
  numberFifty:number | undefined;
  numberOnehoundrate:number | undefined;
  numberTwohoundrate: number | undefined;
  numberFivehundrate: number | undefined;
  numberThousandth: number | undefined;
  concatenatedNumber: any ="";
  numberTotalChange: number | undefined;
  modalinfoChange: any;
  empty: boolean = false;
  numberTotal?: number;
  total?: number;
  price:number = 0;
  constructor(private service:OperacionesService){}
 
  ngOnInit(): void {
    this.modalinfoChange = new bootstrap.Modal(this.modalInfoChange?.nativeElement); 
    
    this.service.get("listProducts").subscribe((res:any) =>{
      console.log(res)
      this.listProduct = res;
    })
  }   

  ngAfterViewInit(): void {
    if(this.numberTotal){
      this.total = this.numberTotal * this.price;
      this.service.postTotal("total",this.total).subscribe((res:any) =>{
       console.log(res)
      })
      console.log(this.total);
    }
  }

  
  ontotalNumberEmit(value:any){
  this.numberTotal = value;
  console.log("total", value);
  }

  onpriceEmit(value:any){
    this.price = value;
    console.log('entre')
    this.ngAfterViewInit();
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
  
    numberFiveth(){
    this.numberFive = 5;
    console.log(this.numberFive)
    this.totalProductMetod();
  }
    numberTenth(){
     this.numbertTen = 10;
     console.log(this.numbertTen)
     this.totalProductMetod();
   }
   
   numberTwentyth(){
     this.numberTwenty = 20;
     console.log(this.numberTwenty)
     this.totalProductMetod();
   }
  
   numberFiftyth(){
     this.numberFifty = 50;
     console.log(this.numberFifty)
     this.totalProductMetod();
   }
  
   numberOnehoundrateth(){
     this.numberOnehoundrate= 100;
     console.log(this.numberOnehoundrate)
     this.totalProductMetod();
   }
   
   numberTwohoundrateth(){
     this.numberTwohoundrate = 200;
     console.log(this.numberTwohoundrate)
     this.totalProductMetod();
   }
  
   numberFivehoundrateth(){
    this.numberTwohoundrate = 500;
    console.log(this.numberTwohoundrate)
    this.totalProductMetod();
  }
  
  numberthousandth(){
    this.numberTwohoundrate = 1000;
    console.log(this.numberTwohoundrate)
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
    
      if (this.numberFive != null) {
      this.concatenatedNumber += this.numberFive.toString();
      this.numberFive = undefined
      }
      if (this.numbertTen != null) {
      this.concatenatedNumber += this.numbertTen.toString();
      this.numbertTen = undefined
      }
      if (this.numberTwenty != null) {
      this.concatenatedNumber += this.numberTwenty.toString();
      this.numberTwenty = undefined
      }
      if (this.numberFifty != null) {
      this.concatenatedNumber += this.numberFifty.toString();
      this.numberFifty = undefined
      }
      if (this.numberOnehoundrate != null) {
      this.concatenatedNumber += this.numberOnehoundrate.toString();
      this.numberOnehoundrate = undefined
      }
      if (this.numberTwohoundrate != null) {
        this.concatenatedNumber += this.numberTwohoundrate.toString();
        this.numberTwohoundrate = undefined
      }
      if (this.numberFivehundrate != null) {
        this.concatenatedNumber += this.numberFivehundrate.toString();
        this.numberFivehundrate = undefined
      }
      if (this.numberThousandth != null) {
        this.concatenatedNumber += this.numberThousandth.toString();
        this.numberThousandth = undefined
      }
  
        this.numberTotalChange = this.concatenatedNumber;
        console.log(this.numberTotalChange);  
  }

  handOutChange(){
    this.empty = true; 
    this.emptyBox?.emit(this.empty);
    this.modalinfoChange.hide();
  }
  
  handOutChangeCancel(){
     this.empty = true; 
    this.emptyBox?.emit(this.empty);
    this.modalinfoChange.hide();
  }
}