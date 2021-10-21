import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FinanceService } from '../services/finance.service';
import { product, product_noid } from '../shared/interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  Product:product_noid={
    productName:'',
    productCost:0,
    productDescription:'',
    productImage:''
  }



  constructor(
    private productService:FinanceService,
    private _formBuilder: FormBuilder,
    private _router:Router,

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
      confirm("Product added successfully");
      this.productForm.reset();
    })
  }

  handle_verifyuser=()=>{
    this._router.navigateByUrl('admin/verifyuser');


  }
  handle_logout=()=>{
    this._router.navigateByUrl("/");

  }

}
