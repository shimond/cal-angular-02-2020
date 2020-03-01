import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreditCard } from '../models/credit-card.model';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit {
  @Input() card: CreditCard;
  @Output() actionTriggered = new EventEmitter<string>();
  dateFormat  = 'MM/yy';
  constructor() { }

  ngOnInit(): void {
  }

  getActionsByCard(): string[] {
    if (this.card.type === 'MasterCard') {
      return ['בטל', 'הזמן חדש'];
    } else {
      return ['בטל', 'מחק כרטיס', 'הזמן חדש'];
    }
  }

  onActionClicked(action: string) {
    this.actionTriggered.emit(action);
  }

}
