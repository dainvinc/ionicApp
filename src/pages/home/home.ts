import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AddItemsPage } from '../add-items/add-items';
import { AddItem } from '../../models/add-item/add-item.interface';
import { EditItemPage } from '../edit-item/edit-item';
// import { User } from '../../models/user/user.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  // user = {} as User;
  // var ref = new Firebase("https://menuapp-8e138.firebaseio.com/");
  itemListRef$: FirebaseListObservable<AddItem[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase, 
    private actionSheetCtrl: ActionSheetController) {
    
    this.itemListRef$ = this.database.list('home');
    
    
  }
  
  // ionViewWillLoad() {
  //   this.af.authState.subscribe(data => console.log(data));
  // }
  
  selectItem(addItem: AddItem) {
    this.actionSheetCtrl.create({
      title: `${addItem.itemName}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.navCtrl.push(EditItemPage, { addItemId: addItem.$key });
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
    this.navCtrl.push(AddItemsPage);
  }

}
