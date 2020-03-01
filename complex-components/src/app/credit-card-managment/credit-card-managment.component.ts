import { Component, OnInit } from '@angular/core';
import { CreditCard, CreditCardType } from '../models/credit-card.model';
import { CreditCardMockService, CreditCardService } from '../services/credit-card.service';

@Component({
  selector: 'app-credit-card-managment',
  templateUrl: './credit-card-managment.component.html',
  styleUrls: ['./credit-card-managment.component.scss'],
  providers:[]
})
export class CreditCardManagmentComponent implements OnInit {

  creditCardList: CreditCard[] = [];
  selectedCard: CreditCard;

  creditCardService: CreditCardService;

  constructor(creditCardSrv: CreditCardService) {
    this.creditCardService = creditCardSrv;
  }

  ngOnInit(): void {

    this.creditCardList = this.creditCardService.getAllCards();
    this.selectedCard = this.creditCardList[3];

  }

  onSelectCardRequested(c: CreditCard) {
    this.selectedCard = c;
  }

  onActionTriggered(action: string) {
    if (action === 'מחק כרטיס') {
      const isConfirmed = confirm('בטוח??');
      if (isConfirmed) {
        const selectedIndex = this.creditCardList.indexOf(this.selectedCard);
        this.creditCardList.splice(selectedIndex, 1);
        this.selectedCard = this.creditCardList[0];
      }
    }
  }
}
