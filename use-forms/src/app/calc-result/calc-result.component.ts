import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calc-result',
  templateUrl: './calc-result.component.html',
  styleUrls: ['./calc-result.component.scss']
})
export class CalcResultComponent implements OnInit {

  sum = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log('init result');
    // const x = +this.activatedRoute.snapshot.params.x;
    // const y = +this.activatedRoute.snapshot.params.y;
    // this.sum = x * y;
    this.activatedRoute.params.subscribe(parameters => {
      const x = +parameters.x;
      const y = +parameters.y;
      this.sum = x * y;
    });

  }

}
