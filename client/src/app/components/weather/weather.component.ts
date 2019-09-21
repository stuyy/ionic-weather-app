import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/Weather';
import { WeatherService } from 'src/app/services/weather.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  weather: Weather[];

  constructor(
    private weatherService: WeatherService,
    private loader: LoadingController) { }
  
  async ngOnInit() {
    this.presentLoader();
    let weatherObservable = await this.weatherService.getWeather();
    weatherObservable.subscribe((data: any) => {
      this.weather = data;
    }, err => {
      if(err) throw err;
    }, () => {
      console.log("Done.");
      this.loader.dismiss();
    });
  }

  async presentLoader() {
    const loading = await this.loader.create({
      message: 'Please Wait...'
    });
    await loading.present();
  }

}
