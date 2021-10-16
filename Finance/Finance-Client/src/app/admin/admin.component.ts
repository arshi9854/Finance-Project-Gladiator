import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FinanceService } from '../finance.service';
import { product, product_noid } from '../shared/interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  Product:product_noid={
    productName:'',
    productCost:0,
    productDescription:'',
    productImage:''
  }



  constructor(
    private productService:FinanceService,
    private _formBuilder: FormBuilder
    
    ) { }

  ngOnInit(): void {
  }

  productForm=this._formBuilder.group({
    productName:["",[Validators.required]],
    productCost:["",[Validators.required]],
    productDescription:["",[Validators.required]],
    productImage:["",[Validators.required]],
  })

  onSubmit=()=>{
    let productData:product_noid={
    productName:this.productForm.value.productName,
    productCost:this.productForm.value.productCost,
    productDescription:this.productForm.value.productDescription,
    productImage:this.productForm.value.productImage
    }

    this.productService.addProducts(productData).subscribe((data)=>{
      console.log(data);
    })
  }

}
