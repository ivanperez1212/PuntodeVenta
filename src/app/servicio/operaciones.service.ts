import {  Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
  total?:number = 0;

  constructor() { }

  calculate(numberTotal?:number, product?:string, today?:any, price?:number){
    var idProduct = JSON.parse(localStorage.getItem("idProduct") || "[]");
    if(idProduct == null){
     idProduct = 1
    }
    var tableProduct = JSON.parse(localStorage.getItem("products") || "[]");
    if(!Array.isArray(tableProduct)){
     tableProduct = [];
    }
    
    var objProducts = {
     id : (idProduct > 1) ? idProduct : (tableProduct.length + 1),
     price :(numberTotal!  * price!),
     name: product,
     date: today
   }
   console.log(objProducts)
    tableProduct.push(objProducts);
    var list = localStorage.setItem("products",JSON.stringify(tableProduct));
    return of(list)
   }

  
   
   post(product:Product){
  
    var idProduct =  JSON.parse(localStorage.getItem("idProduct") || "[]");
    if(idProduct == null){
      idProduct = 1
    }
    var tableProducts = JSON.parse(localStorage.getItem("listProducts") || "[]");
    if(!Array.isArray(tableProducts)){
      tableProducts = [];
    }
    var objProducts = {
      id : (idProduct > 1) ? idProduct : (tableProducts.length + 1),
      price : product.price,
      name: product.name
    }
     tableProducts.push(objProducts);
     localStorage.setItem("listProducts", JSON.stringify(tableProducts));
      console.log(tableProducts)
     return of(tableProducts)
   }

   get(){
    var tableProduct = JSON.parse(localStorage.getItem("products") || "[]");
    return of(tableProduct)
   }

   getProduct(){
    var tableProduct = JSON.parse(localStorage.getItem("listProducts") || "[]");
    return of(tableProduct)
   }

   getId(id:string): Observable<Product | undefined>{
    const tableProduct = JSON.parse(localStorage.getItem('products') || "[]");
    const product = tableProduct.find((res: Product) => res.id === Number(id));
    return of(product);
   }
   update(product: Product, newProduct: Product):Observable<Product | undefined> {
    var tablaProduct = JSON.parse(localStorage.getItem("products") || "[]");
    let index = tablaProduct.findIndex((res: { id: any; }) => res.id === newProduct);
    const id:any = { id: newProduct };
    console.log(index)
    const updatedProduct = { ...newProduct, id: newProduct.id };
    updatedProduct.id = id.id;
    updatedProduct.name = product.name;
    updatedProduct.price = product.price;
    updatedProduct.date = product.date;
   
     if(index == -1){
      index = 0
     }
     tablaProduct[index] = updatedProduct;
     localStorage.setItem('products', JSON.stringify(tablaProduct));
    return of(updatedProduct) 
   }
   
   delete(idProduct: number){
      var tablaProduct = JSON.parse(localStorage.getItem("products") || "[]");
      let index = tablaProduct.findIndex((res: {id:any}) => res.id === idProduct);
      
      if (index !== -1) {
        tablaProduct.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(tablaProduct));
      } 
      return of(idProduct);
   }

} 
