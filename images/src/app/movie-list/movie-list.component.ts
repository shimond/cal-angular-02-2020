import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie[] = [];
  selectedMovie: Movie;

  constructor() { }

  ngOnInit() {
  }

  selectMovie(m: Movie) {
    this.selectedMovie = m;
  }

}
