import { NgModule } from '@angular/core';
import { DirectionsPage } from './directions';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [DirectionsPage],
  imports: [IonicPageModule.forChild(DirectionsPage)],
  entryComponents: [DirectionsPage]
})

export class DirectionsPageModule { }