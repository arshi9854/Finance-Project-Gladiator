import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit {
  productId!:number;
  userId:any;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.productId=this.route.snapshot.params['product_id'];
    this.userId = sessionStorage.getItem('validUserWithId');
  }

}
