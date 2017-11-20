import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-directions',
  templateUrl: 'directions.html'
})
export class DirectionsPage {
  @ViewChild('map') mapRef: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {
    
  }
  
  ionViewDidLoad() {
    this.loadMap();
    console.log("IS the map loaded?");
  }
  
  loadMap() {
    const location = new google.maps.LatLng(51.570531, -43.254125);
    
    const options = {
      center: location,
      zoom: 10
    };
    
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }
  
}