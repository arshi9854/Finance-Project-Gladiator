import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registrationform=new FormGroup({
    Name:new FormControl('',Validators.required),
    Phone_no:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    Email:new FormControl('',[Validators.required,Validators.pattern("^[\w#][\w\.\'+#](.[\w\\'#]+)\@[a-zA-Z0-9]+(.[a-zA-Z0-9]+)*(.[a-zA-Z]{2,20})$")]),
      Address:new FormControl('',[Validators.required]),
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
      confirmpassword:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
      cardType:new FormControl('',Validators.required),
      bank:new FormControl('',Validators.required),
      accountno:new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
      ifsc:new FormControl('',[Validators.required,Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")])



    
 

})

get f(){

  return this.registrationform.controls;

}

onSubmit() {
  this.registrationform.controls.input.markAsTouched();
}

}
