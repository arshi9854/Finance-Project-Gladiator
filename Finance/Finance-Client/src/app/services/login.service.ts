import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { admin_login_form } from '../shared/adminLogin';
import { login_form } from '../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = "http://localhost:8282/login/login"
  constructor(private httpService: HttpClient) { }

  ValidateUser(login: login_form) {
    return this.httpService.post(this.baseURL, login);
  }

}
