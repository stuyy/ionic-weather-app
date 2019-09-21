import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  
  public currentLocations: Array<any>;
  public displayDialog: boolean = false;
  public cityName: string;
  constructor(private storage: Storage) { 

  }

  ngOnInit() {
    this.storage.get('settings')
    .then(res => this.currentLocations = res)
    .catch(err => console.log(err));
  }

  async addNewLocation(event) {
    try {
      const settings = await this.storage.get('settings');
      if(settings !== null) {
        console.log(settings);
        if(settings.some(el => el.toLowerCase() === this.cityName.toLowerCase())) {
          console.log('Duplicate');
        } else {
          settings.push(this.cityName); // Push the new city to the array.
          this.storage.set('settings', settings);
          this.currentLocations = settings;
        }
      } else {
        this.storage.set('settings', []);
      }
    }
    catch(err) {

    }
  }
  toggleDialog(event) {
    this.displayDialog = !this.displayDialog;
  }
}
