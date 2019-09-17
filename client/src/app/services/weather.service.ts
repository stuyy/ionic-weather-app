import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
    
  }
  getWeather(city) {
    console.log(city)
    this.http.get('http://localhost:3000/api/weather', {
      params: {
        city: 'New York'
      }
    }).subscribe(data => console.log(data))
  }
}
