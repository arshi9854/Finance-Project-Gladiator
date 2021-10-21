import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { login_form } from '../shared/login';
@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  fieldTextType: boolean = false;
  invalidLogin: boolean = false;
  submitted: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void { }

  loginForm = this._formBuilder.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get formValidation() {
    return this.loginForm.controls;
  }

  // password peek in login form
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }


  // @Output() togglebuttons = new EventEmitter<string>();


  onSubmit() {
    let loginData: login_form = {
      customerUsername: this.loginForm.value.username,
      customerPassword: this.loginForm.value.password
    }
    console.log(loginData);
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.ValidateUser(loginData).subscribe(data => {
      if(JSON.stringify(data)!="0"){
        sessionStorage.setItem("validUserWithId",JSON.stringify(data))
        console.log(data);
        this.router.navigateByUrl("/product")
        // this.togglebuttons.emit("FALSE");
      }
      else{
        confirm("Enter valid username and password!")
      }
    } , error => console.log(error))
  }

  logout(){
    sessionStorage.removeItem("validUserWithId");
  }
}
