import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kefel-board',
  templateUrl: './kefel-board.component.html',
  styleUrls: ['./kefel-board.component.scss']
})
export class KefelBoardComponent implements OnInit {

  values: Array<{ x: number, y: number }> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    for (let index = 1; index < 10; index++) {
      for (let index2 = 1; index2 < 10; index2++) {
        this.values.push({ x: index, y: index2 });
      }
    }

  }

  goToResult(item: { x: number, y: number }) {
    this.router.navigate(['/result', item.x, item.y]);
  }

}