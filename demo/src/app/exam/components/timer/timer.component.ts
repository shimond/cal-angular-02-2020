import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnChanges {

  @Input() limit = 10;
  @Output() timeOver = new EventEmitter<void>();
  constructor() { }


  ngOnInit() {
    const timerKey = setInterval(() => {
      this.limit--;
      if (this.limit === 0) {
        clearInterval(timerKey);
        this.timeOver.emit();
      }
    }, 1000);

  }

  ngOnChanges() {
    console.log(this.limit);
  }

}
