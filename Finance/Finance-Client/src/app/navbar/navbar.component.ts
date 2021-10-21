import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  userName:string="";
  changeHide(val: boolean){
    this.isUserLoggedIn = val;
  }
  changeUserName(name:string){
    this.userName=name;
  }

  constructor(private _router:Router) { }

  ngOnInit(): void {}

  handle_logout= () => {
    sessionStorage.clear();
    this.isUserLoggedIn = !this.isUserLoggedIn;
    this._router.navigateByUrl('');
  }

  }



 



