import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: string = 'TRUE';

  constructor() { }

  ngOnInit(): void {
  }

  handle_event =($event:string)=>{
    this.isLoggedIn=$event;

  }


}
