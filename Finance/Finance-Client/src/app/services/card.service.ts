import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardService {

   BaseUrl:string="http://localhost:8282/card";
  constructor(private _http:HttpClient){ }

  getCard=()=>
      this._http.get(this.BaseUrl+"/").subscribe((data)=>{
        console.log(data);
        return data

      })

  
}
