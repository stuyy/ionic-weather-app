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
        if(!settings.some(el => el.toLowerCase() === this.cityName.toLowerCase())) {
          settings.push(this.cityName); // Push the new city to the array.
          this.storage.set('settings', settings);
          this.currentLocations = settings;
        }
      } else {
        let result = await this.storage.set('settings', [this.cityName]);
        this.currentLocations = result;
      }
    }
    catch(err) {

    }
    finally {
      this.cityName = '';
    }
  }
  toggleDialog(event) {
    this.displayDialog = !this.displayDialog;
  }
}
