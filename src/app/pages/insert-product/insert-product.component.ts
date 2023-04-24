import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperacionesService } from 'src/app/servicio/operaciones.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent {
  myForm:FormGroup = this.fb.group({
 name:['',[Validators.required]],
 price:['',[Validators.required]]
 })

 constructor(private fb:FormBuilder, private service:OperacionesService, private router : Router){}

 insert(){
  this.service.post(this.myForm.value).subscribe((res:any)=> {
       if(res.length != 0){
        this.router.navigate(['/dashboard'])
       }
  })
 }

}
