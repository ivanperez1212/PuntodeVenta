import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperacionesService } from 'src/app/servicio/operaciones.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
myForm:FormGroup =  this.fb.group({
  name:['',[Validators.required]],
  price:['',[Validators.required]],
  date: ['',[Validators.required]]
})
id: any;
constructor(private fb: FormBuilder,
  private service:OperacionesService,
  private route: ActivatedRoute){}

ngOnInit(): void {
 this.id = this.route.snapshot.paramMap.get('id');

 this.service.getId(this.id!).subscribe((res:Product | undefined) => {
  this.myForm.patchValue(res!)
  this.id = parseInt(this.id);
  console.log(typeof(this.id));
 })
 } 
 update(){
  this.service.update(this.myForm.value,this.id).subscribe((res:any) =>{
   console.log(res)
  })
 }
}