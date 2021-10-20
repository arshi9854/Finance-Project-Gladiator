import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { allUsers } from '../shared/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  BaseUrl:string="http://localhost:8282";
  constructor(private _http:HttpClient) { }

  getProducts=()=>{
     return this._http.get<allUsers[]>(this.BaseUrl+"/admin/all-users");
  }

  user_activation=(userId: number)=>{
    return this._http.get(this.BaseUrl+"/admin/approve-user/"+userId);
  }

  user_deletion=(userId: number) =>{
    return this._http.get(this.BaseUrl+"/user/delete-user/"+userId);
  }

  card_activation=(userId:number,cardType:number) => {
    return this._http.get(this.BaseUrl+"/card/add/"+userId+"/"+cardType);
  }

}
