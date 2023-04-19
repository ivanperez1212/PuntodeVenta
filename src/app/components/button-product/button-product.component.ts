import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-button-product',
  templateUrl: './button-product.component.html',
  styleUrls: ['./button-product.component.css']
})
export class ButtonProductComponent {
  @Input('productButton')productButton:string = "";
 
  constructor(){}

  ngOnInit(): void {
    console.log(this.productButton)
  }
}
