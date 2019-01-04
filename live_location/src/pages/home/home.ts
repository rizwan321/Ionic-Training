import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import { MapPage } from '../map/map';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  latitude;
  longitude;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public toastCtrl: ToastController
  ) {
    console.log("constructor called");
  }

  // ngOnInit() {
  //   console.log("ngOnInit called");
  // }

  public getLocation() {
    this.getPermission();

    console.log("get Location Button Click");
    this.geolocation
      .getCurrentPosition()
      .then(response => {
        this.latitude = response.coords.latitude;
        this.longitude = response.coords.longitude;
        console.log("Following are the locations details:");
        console.log("Latitude: ", this.latitude);
        console.log("Longitude: ", this.longitude);
      })
      .catch(error => {
        console.log("Error getting location", error);
        this.showToast(error);
      });
  }

  getPermission() {
    //  cordova.plugins.diagnostic.isLocationAuthorized(this.first, this.second);
  }

  first(enabled) {
    // cordova.plugins.diagnostic.getLocationMode(
    //   function(locationMode) {
    //     switch (locationMode) {
    //       case cordova.plugins.diagnostic.locationMode.HIGH_ACCURACY:
    //         console.log("High accuracy");
    //         break;
    //       case cordova.plugins.diagnostic.locationMode.BATTERY_SAVING:
    //         console.log("Battery saving");
    //         break;
    //       case cordova.plugins.diagnostic.locationMode.DEVICE_ONLY:
    //         console.log("Device only");
    //         break;
    //       case cordova.plugins.diagnostic.locationMode.LOCATION_OFF:
    //         console.log("Location off");
    //         break;
    //     }
    //   },
    //   function(error) {
    //     console.error("The following error occurred: " + error);
    //   }
    // );
  }

  second(error) {
    console.error("The following error occurred: " + error);
  }

  showToast(value) {
    let toast = this.toastCtrl.create({
      message: value,
      duration: 3000,
      position: "top"
    });

    toast.present();
  }

  gotoMap() {
    this.navCtrl.push(MapPage);
  }
}
