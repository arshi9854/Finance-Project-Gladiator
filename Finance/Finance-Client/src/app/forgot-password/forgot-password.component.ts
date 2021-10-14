import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  sendOTPButton:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
sendOTPActionButton(){
  this.sendOTPButton = true;
}

}
