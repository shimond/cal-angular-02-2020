import { Subject, BehaviorSubject } from 'rxjs';

export class CounterService {

  private count = 0;

  private counterChangedSubject = new BehaviorSubject<number>(0);

  get counterChanged() {
    return this.counterChangedSubject.asObservable();
  }


  plus() {
    this.count++;
    this.counterChangedSubject.next(this.count); // same as emit in EventEmitter

  }

  minus() {
    this.count--;
    this.counterChangedSubject.next(this.count);

  }

  constructor() {
    console.log('Counter service created!');
  }
}
