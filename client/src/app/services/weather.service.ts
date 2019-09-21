import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient, private storage: Storage) {
    
  }
  async getWeather() {
    let cities = await this.storage.get('settings');
    console.log(cities);
    return this.http.get(`http://localhost:3000/api/weather`, {
      params: {
        cities: cities
      }
    })
  }
}
