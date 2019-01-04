import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Geolocation } from "@ionic-native/geolocation";
import { ToastController } from "ionic-angular";
import { GoogleMaps } from "@ionic-native/google-maps";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { MapPage } from "../pages/map/map";

@NgModule({
  declarations: [MyApp, HomePage, MapPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, MapPage],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    ToastController,
    GoogleMaps,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
