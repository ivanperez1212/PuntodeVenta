import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
  total?:number = 0;
  constructor() { }

  calculate(numberTotal?:number, product?:string){
    var idProduct = JSON.parse(localStorage.getItem("idProduct") || "[]");
    if(idProduct == null){
     idProduct = 1
    }
    var tableProduct = JSON.parse(localStorage.getItem("products") || "[]");
    if(!Array.isArray(tableProduct)){
     tableProduct = [];
    }
    switch(product){
     case "chiken":
       if(numberTotal){
         this.total = numberTotal * 80;
       }
       console.log(this.total);
     break;
     case "rice":
       if(numberTotal){
         this.total = numberTotal * 20;
       }
       console.log("entre")
     break;
     case "potato":
       if(numberTotal){
         this.total = numberTotal * 20;
       }
       console.log("entre")
     break;
     case "mole":
       if(numberTotal){
         this.total = numberTotal * 35;
       }
       console.log("entre")
     break;
    }
 
    var objProducts = {
     id : (idProduct > 1) ? idProduct : (tableProduct.length + 1),
     price : this.total,
     name: product
   }
    tableProduct.push(objProducts);
    var list = localStorage.setItem("products",JSON.stringify(tableProduct));
    console.log(list)
    return of(list)
   }
}
