import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FinanceService } from '../services/finance.service';
import { buyProduct } from '../shared/interface';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss'],

})
export class BuyProductComponent implements OnInit {
  productId!: number;
  userId: number = -1;
  productData: any;
  payAmount: number = 0;
  tenure: number = 0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productservice: FinanceService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['product_id'];
    this.userId = Number(sessionStorage.getItem('validUserWithId'));
    this.productservice.getProductsById(this.productId).subscribe(data => { this.productData = data });

  }

  buyproductForm = this._formBuilder.group({
    emi_option: ["", [Validators.required]],
    tenure_option: ["", [Validators.required]],
  })


  onSubmit = () => {
    let option = this.buyproductForm.value.emi_option;
    let tenure = this.buyproductForm.value.tenure_option;
    let cost = this.productData.productCost
    this.tenure = tenure;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = String(today.getFullYear());
    let date_today = yyyy + "-" + mm + "-" + dd;
    this.payAmount = Math.ceil((cost - (cost * option) / 100) / this.tenure);
    let addbuyproduct: buyProduct = {
      userId: this.userId,
      productId: this.productId,
      orderDate: date_today,
      paidAmount: this.payAmount,
      emiScheme: option,
      productName: this.productData.productName
    }
    Swal.fire({
      title: 'You will pay ' + "₹ " + this.payAmount + 'per month, for ' + this.tenure + 'months.' + 'Confirm Payment?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Agree',
      denyButtonText: "Don't Agree"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productservice.checkForValidPurchase(this.userId, this.payAmount).subscribe((data) => {
          console.log(data);
          if (data === -1) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You dont have enough credits to purchase this product!!'
            })
          }
          else {
            this.productservice.addBuyProducts(addbuyproduct).subscribe((data) => {
              console.log(data);
              Swal.fire(
                'Yaaayyyy!',
                'You purchased the product!',
                'success'
              )
              this.router.navigateByUrl("/product")
            })
          }
        })
      }
      else if (result.isDenied) {
        Swal.fire(
          'Opsss...',
          'Your purchase failed!',
          'error'
        )
        this.router.navigateByUrl("/product")
      }
    })
  }
}
