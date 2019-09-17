import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/Weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  weather: Weather[];

  constructor() { }

  ngOnInit() {
    this.weather = [
      {
        city: 'New York City',
        country: 'USA',
        temperature: 96,
        icon: 'sunny'
      },
      {
        city: 'Queens',
        country: 'USA',
        temperature: 95,
        icon: 'thunderstorm'
      },
      {
        city: 'Los Angeles',
        country: 'USA',
        temperature: 105,
        icon: 'rainy'
      }
    ]
  }

}
