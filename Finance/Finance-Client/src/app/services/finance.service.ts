import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import{product_noid,product, buyProduct, cardDetails} from '../shared/interface';
@Injectable({
  providedIn: 'root'
})

export class FinanceService {

  // productList!:product[];

  productRoute:string="http://localhost:8282/product";
  buyproductRoute:string="http://localhost:8282/buyproduct";
  cardDetailsRoute:string="http://localhost:8282/card";
  usersRoute:string="http://localhost:8282/user";
  constructor(private _http:HttpClient) { }

  getProducts=()=>{
     return this._http.get<product[]>(this.productRoute+"/");
  }

  addProducts=(product:product_noid )=>{
    return this._http.post(this.productRoute+"/add",product);
  }

  getProductsById=(id:number)=>{
    return this._http.get(this.productRoute+"/search/"+id);
  }
  addBuyProducts=(buyproduct:buyProduct )=>{
    return this._http.post(this.buyproductRoute+"/addbuyproduct",buyproduct);
  }
  checkForValidPurchase=(userId:number,productCost:number)=>{
    return this._http.get(this.cardDetailsRoute+"/"+userId+"/"+productCost);
  }
  checkActivation = (userId:number)=>{
    return this._http.get(this.usersRoute+"/check-activation/"+userId);
  }
  getCardDetailsById = (userId:number)=>{
    return this._http.get(this.cardDetailsRoute+"/"+userId);
  }
  getPurchasedProductById=(userId:number)=>{
    return this._http.get<buyProduct[]>(this.buyproductRoute+"/"+userId);
  }
}
