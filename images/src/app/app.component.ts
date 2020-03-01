import { Component, OnInit } from '@angular/core';
import { ImageDetails } from './models/image-details.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cal-images';
  urls1: ImageDetails[];
  urls2: ImageDetails[];
  moviesFromAppComponent: Movie[];
  ngOnInit() {
    this.urls1 = [
      {
        url: 'https://www.ynet.co.il/PicServer5/2017/08/26/7993030/799302901000100640360no.jpg',
        title: 'image from ynet'
      },
      {
        url: 'https://www.liberaldictionary.com/wp-content/uploads/2019/01/cal-3253.jpg',
        title: 'image from liberaldictionary'
      }
    ];

    this.urls2 = [
      {
        url: 'https://www.cal-online.co.il/media/3537/sgira_calhul2.jpg',
        title: 'image from Cal'
      },
      {
        url: 'https://www.cal-online.co.il/media/3498/peulot_nefotzot.jpg',
        title: 'image from cal-online'
      }
    ];

    this.moviesFromAppComponent = [
      { name: 'Aba Ganuv 1', description: 'AAAAA', length: 99, rating: 2 },
      { name: 'Aba Ganuv 2', description: 'BBBBB', length: 109, rating: 1 },
      { name: 'Aba Ganuv 3', description: 'CCCCC', length: 102, rating: 3 },
      { name: 'Aba Ganuv 4', description: 'DDDD', length: 30, rating: 5 },
    ];
  }
}
