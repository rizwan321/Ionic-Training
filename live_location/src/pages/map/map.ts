import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GoogleMaps, GoogleMap } from "@ionic-native/google-maps";

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  @ViewChild("map") mapElement: ElementRef;
  map: GoogleMap;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googlemaps: GoogleMaps
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MapPage");
  }

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    let element = this.mapElement.nativeElement;
    this.map = this.googlemaps.create(element);
  }
}
