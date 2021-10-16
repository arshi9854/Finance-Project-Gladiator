import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../finance.service';
import { product } from '../shared/interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList!:product[];



  constructor(private productService:FinanceService) { }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.productList=data;
    })
    
  }

  

  

}
