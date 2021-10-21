import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../shared/Registration';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseURL:string="http://localhost:8282/user"
  constructor(private httpser:HttpClient) { }

  addUser(register: Registration) {
        return this.httpser.post(this.baseURL+"/registration", register);
      }

    getUserName=(userId:number)=>{
      return this.httpser.get(this.baseURL+"/get-username/"+userId);
    }

}
// 'Access-Control-Allow-Origin', '*'
// 'Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT'
