import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import{product_noid,product, buyProduct} from '../shared/interface';
@Injectable({
  providedIn: 'root'
})

export class FinanceService {

  // productList!:product[];

  BaseUrl:string="http://localhost:8282/product";
  BaseUrl1:string="http://localhost:8282/buyproduct";
  BaseUrl2:string="http://localhost:8282/card";
  constructor(private _http:HttpClient) { }

  getProducts=()=>{
     return this._http.get<product[]>(this.BaseUrl+"/");
  }

  addProducts=(product:product_noid )=>{
    return this._http.post(this.BaseUrl+"/add",product);
  }

  getProductsById=(id:number)=>{
    return this._http.get(this.BaseUrl+"/search/"+id);
  }
  addBuyProducts=(buyproduct:buyProduct )=>{
    return this._http.post(this.BaseUrl1+"/addbuyproduct",buyproduct);
  }
  checkForValidPurchase=(userId:number,productCost:number)=>{
    return this._http.get(this.BaseUrl2+"/"+userId+"/"+productCost);
  }
}
