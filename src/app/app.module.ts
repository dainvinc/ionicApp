import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
<<<<<<< HEAD
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
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
// import { NgModule } from '@angular/core';

=======
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AddItemsPage } from '../pages/add-items/add-items';
import { EditItemPage } from '../pages/edit-item/edit-item';
import { LoginPage } from '../pages/login/login';
// import { AuthProvider } from '../providers/auth/auth';
import { HttpModule } from '@angular/http';
import { AngularFireAuthModule } from 'angularfire2/auth';
>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ListPage,
    EditItemPage,
    LoginPage,
    AddItemPage,
    WelcomePage,
    AboutUsPage,
    FullMenuPage,
    DirectionsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(DirectionsPage),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    AngularFireAuthModule
=======
    AddItemsPage,
    EditItemPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    AngularFireDatabaseModule
>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ListPage,
    EditItemPage,
    LoginPage,
    WelcomePage,
    AddItemPage,
    AboutUsPage,
    FullMenuPage,
    DirectionsPage,
=======
    AddItemsPage,
    EditItemPage,
    LoginPage
>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
=======
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    // AuthProvider
  ]
})
export class AppModule {}
>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac
