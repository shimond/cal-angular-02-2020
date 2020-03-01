import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreditCard, CreditCardType } from '../models/credit-card.model';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss']
})
export class CreditCardListComponent implements OnInit {

  @Input() cards: CreditCard[];
  @Input() selectedCard: CreditCard;
  @Output() selectCardRequested = new EventEmitter<CreditCard>();

  constructor() { }

  ngOnInit(): void {

  }

  onCardClick(c: CreditCard) {
    this.selectCardRequested.emit(c);
  }



}
