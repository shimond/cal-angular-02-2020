import { Component, OnInit, Input } from '@angular/core';
import { ImageDetails } from '../models/image-details.model';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  @Input() urls: ImageDetails[];
  selectedPicUrl: ImageDetails;
  constructor() { }

  ngOnInit() {
    this.selectedPicUrl = this.urls[0];
  }
  selectPic(url: ImageDetails) {
    this.selectedPicUrl = url;
  }





}
