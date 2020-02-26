import { Component, OnDestroy } from '@angular/core';
import { CounterService } from './services/counter.service';
import { Subscription, Observable } from 'rxjs';
import { filter, map, debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'use-services';

  count$: Observable<number>;
  isShown = false;

  changeVisibility() {
    this.isShown = !this.isShown;
  }

  constructor(private counterService: CounterService) {

  }

  ngOnInit(): void {
    this.count$ = this.counterService.counterChanged
      .pipe(filter(x => x % 2 === 0), map(x => x * 2), debounceTime(50));
  }

  ngOnDestroy() {
  }
}
