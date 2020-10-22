import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';

firebase.initializeApp(
  {
    apiKey: "AIzaSyBwdxNa1HBBOOfG1yLr1NHqY0CK2CQse8Y",
    authDomain: "button-c1ec7.firebaseapp.com",
    databaseURL: "https://button-c1ec7.firebaseio.com",
    projectId: "button-c1ec7",
    storageBucket: "button-c1ec7.appspot.com",
    messagingSenderId: "747016298519",
    appId: "1:747016298519:web:b125a3a2d234428ca5bc52",
    measurementId: "G-9ZL7WQ8MSJ"
  }
);



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
