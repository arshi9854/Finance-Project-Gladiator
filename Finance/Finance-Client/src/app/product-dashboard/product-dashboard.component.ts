import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from '../services/finance.service';
import { product } from '../shared/interface';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  productList!:product[];
  productData!:product[];
  filterdata:string='';
  sort_by:string='';
  activation:string='false';
  userId:number=-1;



  constructor(
    private productService:FinanceService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.userId = Number(sessionStorage.getItem('validUserWithId'));

    this.productService.getProducts().subscribe((data)=>{
      this.productList=data;
      this.productData=this.productList;
    })
    if(this.userId!==0){
      this.productService.checkActivation(this.userId).subscribe((data)=>{
        this.activation=JSON.stringify(data);
      })
    }
  

  }

  filter_users = () => {
    if(this.filterdata){
      this.productList=this.productData.filter((product:product)=>{
        return product.productName.toLowerCase().indexOf(this.filterdata.toLowerCase())>-1
      })
    }
    else{
      this.productList=this.productData;
    }
  }

  handleSort=()=>{
    if(this.sort_by==='Name'){
      this.productList=this.productList.sort((a,b)=>{
        var string_a=a.productName.toLocaleUpperCase().trim();
        var string_b=b.productName.toLocaleUpperCase().trim();
      
      if(string_a<string_b){
        return -1;
      }
      if(string_b<string_a){
        return 1;
      }
      return 0;
      
    })}

    else{
      this.productList=this.productList.sort((a,b)=>(a.productCost-b.productCost));
    }
    }

    take_to_profile =()=>{
      this.router.navigateByUrl("profile")
    }

    handle_buynow =(productId:number)=>{
      this.router.navigateByUrl("/buyproduct/"+productId)
    }
   
}
