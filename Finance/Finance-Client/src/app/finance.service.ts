import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import{product_noid,product} from './shared/interface';
@Injectable({
  providedIn: 'root'
})

export class FinanceService {

  // productList!:product[];

  BaseUrl:string="http://localhost:8282/product";
  constructor(private _http:HttpClient) { }

  getProducts=()=>{
     return this._http.get<product[]>(this.BaseUrl+"/");
  }

  addProducts=(product:product_noid )=>{
    return this._http.post(this.BaseUrl+"/add",product);
  }
}
