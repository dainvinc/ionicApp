import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-directions',
  templateUrl: 'directions.html'
})
export class DirectionsPage {
  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController) {
    
  }
  
  ionViewDidLoad() {
    this.loadMap();
    console.log("IS the map loaded?");
  }
  
  loadMap() {
    const location = new google.maps.LatLng(41.718851, -73.964400);
    
    const options = {
      center: location,
      zoom: 10
    };
    
    const map = new google.maps.Map(this.mapRef.nativeElement, options);
    
    this.addMarker(location, map);
  }
  
  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    });
  }
}