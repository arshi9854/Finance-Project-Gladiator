import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { admin_login_form } from '../shared/adminLogin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  baseURL: string = "http://localhost:8282/login/adminlogin"
  constructor(private httpService: HttpClient) { }

  validateAdmin(adminlogin: admin_login_form) {
    return this.httpService.post(this.baseURL, adminlogin);
  }
}
