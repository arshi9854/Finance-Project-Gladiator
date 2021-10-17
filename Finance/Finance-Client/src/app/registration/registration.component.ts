import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../Registration';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submitted: boolean = false;
  registration : Registration=new Registration();  

  constructor(private router: Router, 							
        private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  registrationform=new FormGroup({
    
    Name:new FormControl('',Validators.required),
    Phone_no:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),//pattern
    Email:new FormControl('',[Validators.required]),
      Address:new FormControl('',[Validators.required]),
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),//pattern
      confirmpassword:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),//pattern
      cardType:new FormControl('',Validators.required),
      bank:new FormControl('',Validators.required),
      accountno:new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
      ifsc:new FormControl('',[Validators.required])



    
 

})

get f(){

  return this.registrationform.controls;

}

// onSubmit() {
//   this.registrationform.controls.input.markAsTouched();
// }

// saveUser(registrationform){  
//   this.registration=new Registration();     
//   this.registration.customerName=this.Name.value;  
//   this.registration.Phone_no=this.StudentEmail.value;  
//   this.registration.Email=this.StudentBranch.value;  
//   this.registration. Address=this.StudentName.value;  
//   this.registration.username=this.StudentEmail.value;  
//   this.registration.password=this.StudentBranch.value; 
//   this.registration.confirmpassword=this.StudentName.value;  
//   this.registration.cardType=this.StudentEmail.value;  
//   this.registration.bank=this.StudentBranch.value; 
//   this.registration.accountno=this.StudentBranch.value; 
//   this.registration.ifsc=this.StudentBranch.value; 
//   this.submitted = true;  
//   this.submit();  
// }  


submit() {
  let Registration= { customerName:this.registrationform.value.Name,
    customerPhone:this.registrationform.value.Phone_no,
    customerEmail:this.registrationform.value.Email,
    customerUsername:this.registrationform.value.username,
    customerPassword:this.registrationform.value.password,
    customerAddress:this.registrationform.value.Address,
    cardType:this.registrationform.value.cardType,
    customerBank:this.registrationform.value.bank,
    customerAccountNo:this.registrationform.value.accountno,
    customerIfsc:this.registrationform.value.ifsc,
    activation:"False",
  }



  					console.log(Registration);	
      this.submitted = true;							
      if(this.registrationform.invalid){							
        return;							
      }	
  this.registrationService.addUser(Registration)  
      .subscribe(data => console.log(data), error => console.log(error));  
      	

}
}
