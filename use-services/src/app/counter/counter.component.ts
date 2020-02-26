import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  count = 0;
  constructor(private counterService: CounterService) {

  }

  ngOnInit(): void {
    // this.count = this.counterService.count;
    this.subs.push(this.counterService.counterChanged.subscribe((counter) => {
      this.count = counter;
      console.log('Counter changed!', this.count);
    }));
  }

  ngOnDestroy() {
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
  }

  plus() {
    this.counterService.plus();
  }

  minus() {
    this.counterService.minus();
  }

}
