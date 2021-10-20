import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../services/finance.service';


export interface PeriodicElement {
  CardNumber: Number;
  Name: String;
  Validtill: Date;
  CardType: String;
  TotalCredit: Number;
  CreditUsed: Number;
  RemainingCredit: Number;
}
@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent implements OnInit {

  // CardDetails !: PeriodicElement;
  

  constructor( private CardService:FinanceService) {
   
    
  }

 ngOnInit( ): void {
   // this.CardDetails=this.CardService.getCard()
   // this.CardService.getCard();

 }
}