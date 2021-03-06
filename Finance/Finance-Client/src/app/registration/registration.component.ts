import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../shared/Registration';
import { RegistrationService } from '../services/registration.service';
import { FileUploader } from 'ng2-file-upload';
import Swal from 'sweetalert2';
const UploadURL = 'http://localhost:8282/user/upload';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submitted: boolean = false;
  registration: Registration = new Registration();

  title = 'DemoIntegrationProjectAngClient';
  public uploader: FileUploader = new FileUploader({ url: UploadURL, itemAlias: 'file' });

constructor(private router: Router,
    private registrationService: RegistrationService) { }

  registrationform = new FormGroup({

    Name: new FormControl('', Validators.required),
    // Validators.pattern("^[0-9\-]*$")
    Phone_no: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),]),//pattern
    Email: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),//pattern
    cardType: new FormControl('', Validators.required),
    bank: new FormControl('', Validators.required),
    accountno: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    // Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")
    ifsc: new FormControl('', [Validators.required,]),//pattern
    owner: new FormControl('', Validators.required),
    cvv: new FormControl('', Validators.required),
    cardnumber: new FormControl('', Validators.required),
    expiry: new FormControl('', Validators.required)

}

  )


  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
}

get f() {

    return this.registrationform.controls;

  }

  onSubmit() {
    this.registrationform.controls.input.markAsDirty();
  }




  submit() {
    let registration: Registration = {
      customerName: this.registrationform.value.Name,
      customerPhone: this.registrationform.value.Phone_no,
      customerEmail: this.registrationform.value.Email,
      customerUsername: this.registrationform.value.username,
      customerPassword: this.registrationform.value.password,
      customerAddress: this.registrationform.value.Address,
      cardType: this.registrationform.value.cardType,
      customerBank: this.registrationform.value.bank,
      customerAccountNo: this.registrationform.value.accountno,
      customerIfsc: this.registrationform.value.ifsc,
      activation: "false",
    }
    console.log(registration);
    this.submitted = true;
    this.registrationService.addUser(registration)
      .subscribe(data => console.log(data), error => console.log(error));
      Swal.fire(
        'Yaaayyyy!',
        'You are successfully registered. Mail has been triggered with your User ID.',
        'success'
      )
  }
}
