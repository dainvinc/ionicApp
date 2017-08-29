import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AddItem } from '../../models/add-item/add-item.interface';

/**
 * Generated class for the AddItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  addItem = {} as AddItem
  itemListRef$: FirebaseListObservable<AddItem[]>

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams, 
  private database: AngularFireDatabase) {
    this.itemListRef$ = this.database.list('home');
  }
  
  addNewItem(addItem: AddItem) {
    this.itemListRef$.push({
      itemName: this.addItem.itemName,
      itemNumber: this.addItem.itemNumber
    });
    
    this.addItem = {} as AddItem;
    this.navCtrl.pop();
  }
}
