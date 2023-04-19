import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonProductComponent } from 'src/app/components/button-product/button-product.component';
import { KeyboardComponent } from 'src/app/components/keyboard/keyboard.component';
import { ModalConfirmationComponent } from 'src/app/components/modal-confirmation/modal-confirmation.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { TotalpipePipe } from 'src/app/pipe/totalpipe.pipe';

@NgModule({
  declarations: [
    ButtonProductComponent,
    KeyboardComponent,
    ModalConfirmationComponent,   
    TableComponent,
    TotalpipePipe
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonProductComponent,
    KeyboardComponent,  
    ModalConfirmationComponent,
    TableComponent,
    TotalpipePipe
  ]
})
export class SharedModule { }
