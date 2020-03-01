import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('About init');
  }

  ngOnDestroy() {
    console.log('About destroy');

  }

}
