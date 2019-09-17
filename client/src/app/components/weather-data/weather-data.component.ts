import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/Weather';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss'],
})
export class WeatherDataComponent implements OnInit {

  @Input() weather: Weather;
  
  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  routeForecast(weather) {
    console.log(weather);
    this.router.navigate(['/forecast'])
  }
}
