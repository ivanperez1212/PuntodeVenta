import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-product',
  templateUrl: './button-product.component.html',
  styleUrls: ['./button-product.component.css']
})
export class ButtonProductComponent {
  @Input('productButton')productButton:string = "";
  showKey:boolean = false; 
  @Output()show : EventEmitter<boolean> = new EventEmitter();
  constructor(){}

  ngOnInit(): void {
  }

  showKeyboard(){
  this.showKey = true;
  this.show.emit(this.showKey);
  console.log(this.showKey)
  }
}
