import { Component, OnInit, Input } from '@angular/core';
import { CreditCardType } from '../models/credit-card.model';

@Component({
  selector: 'app-credit-card-type-icon',
  templateUrl: './credit-card-type-icon.component.html',
  styleUrls: ['./credit-card-type-icon.component.scss']
})
export class CreditCardTypeIconComponent implements OnInit {

  @Input() cardType: CreditCardType;

  constructor() { }

  ngOnInit(): void {
  }

}
