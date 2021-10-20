import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinanceService } from '../services/finance.service';
import { buyProduct, cardDetails } from '../shared/interface';


@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent implements OnInit {
  userId?:number;
  cardNumber!:number;
  card:any;
  purchasedProducts:Array<buyProduct>=[];


  constructor( private cardService:FinanceService,private route: ActivatedRoute,private router:Router) {
    this.card=JSON.parse(sessionStorage.getItem('cardDetails')!);
  }

 ngOnInit( ): void {
  this.userId = Number(sessionStorage.getItem('validUserWithId'));


  this.cardService.getCardDetailsById(this.userId).subscribe((card_details) => {
    console.log(card_details);
    sessionStorage.setItem('cardDetails',JSON.stringify(card_details));
  })

  console.log(sessionStorage.getItem('cardDetails'));

  this.cardService.getPurchasedProductById(this.userId).subscribe((data:Array<buyProduct>)=>{
    console.log(data);
    for(let p of data) {
      this.purchasedProducts.push(p)
    }
  },error => console.log(error))

}

handle_goback=()=>{
  this.router.navigateByUrl("product")
}
}