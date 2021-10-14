import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  fieldTextType: boolean = false;
  adminFieldTextType: boolean = false;
  password: string = "Password";
  isClicked:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  // password peek in login form
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  adminToggleFieldTextType(){
    this.adminFieldTextType =  !this.adminFieldTextType;
  }

  handle_click=()=>{
    this.isClicked=!this.isClicked
  }
}

//ng add @angular/material
