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
    this.weatherService.getWeather([
      'New York',
      'Queens',
      'Los Angeles',
      'Toronto'
    ]).subscribe((data: any) => {
      this.weather = data;
    })
  }

}
