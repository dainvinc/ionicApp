import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EditItemPage } from '../pages/edit-item/edit-item';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AddItemPage } from '../pages/add-item/add-item';
import { WelcomePage } from '../pages/welcome/welcome';
import { AboutUsPage } from '../pages/about-us/about-us';
import { FullMenuPage } from '../pages/full-menu/full-menu';
import { DirectionsPage } from '../pages/directions/directions';
import { Geolocation } from '@ionic-native/geolocation';
// import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EditItemPage,
    LoginPage,
    AddItemPage,
    WelcomePage,
    AboutUsPage,
    FullMenuPage,
    DirectionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(DirectionsPage),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EditItemPage,
    LoginPage,
    WelcomePage,
    AddItemPage,
    AboutUsPage,
    FullMenuPage,
    DirectionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}