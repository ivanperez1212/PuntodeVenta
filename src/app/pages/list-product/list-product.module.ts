import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductRoutingModule } from './list-product-routing.module';

import { ListProductComponent } from './list-product.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ListProductRoutingModule,
    SharedModule
  ]
})
export class ListProductModule { }
