import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cities: string[];
  names: string[];
  textOfButton = 'WOW';
  selectedCity: string;
  selectedName: string;


  ngOnInit() {
    this.cities = ['Eilat', 'Jerusalem', 'Kfar-Aza', 'Tel-Aviv',
      'Kfar Sava'];

    this.names = ['David', 'Tikva', 'Moshe', 'Naama',
      'Tal'];

    this.selectedCity = this.cities[3];
    this.selectedName = this.names[1];
  }

  setSelectedName(name: string) {
    if (name !== 'David') {
      this.selectedName = name;
    } else {
      alert('לא ניתן לבחור את דוד');
    }
  }

  setSelectedCity(city: string) {
    this.selectedCity = city;
  }


  onClick(e) {
    console.log(e);
  }
}
