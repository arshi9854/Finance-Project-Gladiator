import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FinanceService } from '../services/finance.service';
import { buyProduct } from '../shared/interface';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss'],

})
export class BuyProductComponent implements OnInit {
  productId!:number;
  userId:number=-1;
  productData:any;
  payAmount:number=0;
  tenure:number=0;
 

  constructor(
    private route:ActivatedRoute, 
    private router:Router,
    private productservice:FinanceService,
    private _formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.productId=this.route.snapshot.params['product_id'];
    this.userId = Number(sessionStorage.getItem('validUserWithId'));
    this.productservice.getProductsById(this.productId).subscribe(data=>{this.productData=data});

  }

  buyproductForm=this._formBuilder.group({
   emi_option:["",[Validators.required]],
    tenure_option:["",[Validators.required]],
  })


  onSubmit=()=>{
    let option = this.buyproductForm.value.emi_option;
    let tenure = this.buyproductForm.value.tenure_option;
    let cost = this.productData.productCost
    this.tenure = tenure;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = String(today.getFullYear());
    let date_today=yyyy+"-"+mm+"-"+dd;
    this.payAmount = Math.ceil((cost - (cost*option)/100)/this.tenure);



    let addbuyproduct:buyProduct={
      userId:this.userId,
      productId:this.productId,
      orderDate:date_today,
      paidAmount:this.payAmount,
      emiScheme:option,
      productName:this.productData.productName
    }

    
    if(confirm("YOU ARE ABOUT TO PAY =======>"+"rs. "+this.payAmount+"\n EMI DURATION=======>"+this.tenure+"months"+ "\nCONFIRM PAYMENT")){

      console.log(addbuyproduct);
      this.productservice.checkForValidPurchase(this.userId,this.payAmount).subscribe((data)=>{
        console.log(data);
        if(data===-1){
          alert("YOU DONT HAVE ENOUGH CREDITS TO PURCHASE THIS PRODUCT!!")
        }
        else{
          this.productservice.addBuyProducts(addbuyproduct).subscribe((data)=>{
            console.log(data);
            alert("PURCHASE SUCCESSFUL");
            this.router.navigateByUrl("/product")
          })
        }
      })
      
    }
      else{
        alert("PURCHASE FAILED!!");
        this.router.navigateByUrl("/product")
      }


}
}
