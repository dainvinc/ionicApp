import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AddItem } from '../../models/add-item/add-item.interface';
import { EditItemPage } from '../edit-item/edit-item';
import { AddItemPage } from '../add-item/add-item';
import { User } from '../../models/users/users.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  user = {} as User;
  
  itemListRef$: FirebaseListObservable<AddItem[]>;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController) {
      
      this.itemListRef$ = this.database.list('home');
  }
  
  selectItem(addItem: AddItem) {
    this.actionSheetCtrl.create({
      title: `${addItem.itemName}`, 
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.navCtrl.push(EditItemPage, {addItemId: addItem.$key});
          }  
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.itemListRef$.remove(addItem.$key);
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log("Cancelled!");
          }
        }
      ]
    }).present();
  }
  
  navigateToAddItemsPage() {
    this.navCtrl.push(AddItemPage);
  }
  
}
