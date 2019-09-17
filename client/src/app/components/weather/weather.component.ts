import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/Weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  weather: Weather[];

  constructor(private weatherService: WeatherService) { }

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
    this.weatherService.getWeather('New York')
  }

}
