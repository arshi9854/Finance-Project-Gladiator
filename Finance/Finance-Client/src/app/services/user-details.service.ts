import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { allUsers } from '../shared/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  BaseUrl:string="http://localhost:8282/admin";
  constructor(private _http:HttpClient) { }

  getProducts=()=>{
     return this._http.get<allUsers[]>(this.BaseUrl+"/all-users");
  }

  user_activation=(userId: number)=>{
    return this._http.get(this.BaseUrl+"/approve-user/"+userId);
  }
}
