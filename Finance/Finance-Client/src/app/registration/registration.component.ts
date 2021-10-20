import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../shared/Registration';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submitted: boolean = false;
  registration : Registration=new Registration();
  // public uploader: FileUploader = new FileUploader({url:UploadURL, itemAlias: 'file'});


  constructor(private router: Router,
        private registrationService: RegistrationService) { }

  ngOnInit(): void {

    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //      console.log('FileUpload:uploaded:', item, status, response);
    //      alert('File uploaded successfully');
    //  };
  }
  

  registrationform=new FormGroup({

    Name:new FormControl('aravind',Validators.required),
    Phone_no:new FormControl('8778570834',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),//pattern
    Email:new FormControl('araviku04@gmail.com',[Validators.required]),
      Address:new FormControl('13/1 asdasd',[Validators.required]),
      username:new FormControl('asdasd',[Validators.required]),
      password:new FormControl('asdasdasdasd',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),//pattern
      confirmpassword:new FormControl('asdasdasdasd',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),//pattern
      cardType:new FormControl('Gold',Validators.required),
      bank:new FormControl('ICICI',Validators.required),
      accountno:new FormControl('123123123',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
      ifsc:new FormControl('123123123',[Validators.required]),
      owner:new FormControl('me',Validators.required),
      cvv:new FormControl('123',Validators.required),
      cardnumber:new FormControl('123123123',Validators.required),
      expiry:new FormControl('',Validators.required)







}
)



get f(){

  return this.registrationform.controls;

}

onSubmit() {
  this.registrationform.controls.input.markAsDirty();
}

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
  this.registrationService.addUser(Registration).subscribe(data =>
    { 
      console.log(data)
    }, 
    error => console.log(error));


}
}
