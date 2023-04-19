import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalpipe'
})
export class TotalpipePipe implements PipeTransform {
  transform(products: any[]): number {
    let total = 0;
    for (const product of products) {
      total += product.price;
    }
    return total;
  }

}
