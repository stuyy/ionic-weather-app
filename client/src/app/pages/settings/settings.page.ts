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
    this.currentLocations = [
      {
        name: 'New York'
      },
      {
        name: 'Toronto'
      }
    ]
  }

  addNewLocation(event) {
    console.log(this.cityName);
    this.currentLocations.push({
      name: this.cityName
    })
  }
  toggleDialog(event) {
    this.displayDialog = !this.displayDialog;
  }
}
