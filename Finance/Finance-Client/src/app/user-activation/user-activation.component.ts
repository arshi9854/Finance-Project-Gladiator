import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserDetailsService } from '../services/user-details.service';
import { allUsers } from '../shared/user-details';


@Component({
  selector: 'app-user-activation',
  templateUrl: './user-activation.component.html',
  styleUrls: ['./user-activation.component.css']
})
export class UserActivationComponent implements OnInit {
  userList!: allUsers[];
  userData!: allUsers[];
  activated!: boolean;
  constructor(
    private detailService:UserDetailsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.detailService.getProducts().subscribe((data) => {
      this.userList = data;
      this.userData = this.userList;
    })
  }

  handle_userid_activation = (userId: number, cardType: string) => {
    console.log(userId)
    Swal.fire({
      title: 'Do you want to activate the user?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Activate',
      denyButtonText: `Don't Activate`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.detailService.user_activation(userId).subscribe();
        if (cardType === "Gold") {
          this.detailService.card_activation(userId, 1).subscribe();
        }
        else {
          this.detailService.card_activation(userId, 2).subscribe();
        }
        Swal.fire('User ' + userId, 'Activated', 'success').then(function () {
          location.reload();
        })
      } else if (result.isDenied) {
        Swal.fire('User was not Activated', '', 'info').then(function () {
          location.reload();
        })
      }
    })
  }

  handle_userid_deletion(userId: number) {
    console.log(userId)

    Swal.fire({
      title: 'Do you want to delete the user?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        this.detailService.user_deletion(userId).subscribe();
        Swal.fire('User ' + userId, 'Deleted', 'success').then(function () {
          location.reload();
        })
      } else if (result.isDenied) {
        Swal.fire('Deletion of User Cancelled', '', 'info').then(function () {
          location.reload();
        })
      }
    })

  }

  handle_product=()=>{
    this._router.navigateByUrl('admin');


  }
  handle_logout=()=>{
    this._router.navigateByUrl("/");

  }
}
