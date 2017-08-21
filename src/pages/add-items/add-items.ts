import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AddItem } from '../../models/add-item/add-item.interface';

/**
 * Generated class for the AddItemsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-items',
  templateUrl: 'add-items.html',
})
export class AddItemsPage {

  addItem = {} as AddItem
  
  addItemRef$: FirebaseListObservable<AddItem[]>
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.addItemRef$ = this.database.list('home');
  }

  addNewItem(addItem: AddItem) {
    
    this.addItemRef$.push({
      itemName: this.addItem.itemName,
      itemNumber: Number(this.addItem.itemNumber)
    });
    
    this.addItem = {} as AddItem;
    
    this.navCtrl.pop();
  }
}
