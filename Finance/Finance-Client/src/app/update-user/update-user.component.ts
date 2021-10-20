import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userUpdateForm = new FormGroup({

    Name: new FormControl('', Validators.required),
    Phone_no: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),//pattern
    Email: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),//pattern
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),//pattern
    cardType: new FormControl('', Validators.required),
    bank: new FormControl('', Validators.required),
    accountno: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    ifsc: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

}
