import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertProductRoutingModule } from './insert-product-routing.module';
import { InsertProductComponent } from './insert-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InsertProductComponent
  ],
  imports: [
    CommonModule,
    InsertProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class InsertProductModule { }
