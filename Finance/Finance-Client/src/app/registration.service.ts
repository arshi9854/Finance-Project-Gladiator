import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from './Registration';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseURL:string="http://localhost:8091/user/registration"
  constructor(private httpser:HttpClient) { }

  addUser(register: Registration) {	
    						
        return this.httpser.post(this.baseURL, register);	
    							
      }	

}
// 'Access-Control-Allow-Origin', '*'
// 'Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT'