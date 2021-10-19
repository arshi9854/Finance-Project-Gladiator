import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { send_password } from '../shared/forgot-password';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  baseURL: string = "http://localhost:8282/login"
  constructor(private httpService: HttpClient) { }

  sendOTPActionButton(email: string) {
    return this.httpService.post(this.baseURL + "/verify", email);
  }

  verifyOTP() { }

  updatePassword(data: send_password) {
    return this.httpService.post(this.baseURL+"/update-password", data);
  }

}
