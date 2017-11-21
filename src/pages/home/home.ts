import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
<<<<<<< HEAD
import { AddItem } from '../../models/add-item/add-item.interface';
import { EditItemPage } from '../edit-item/edit-item';
import { AddItemPage } from '../add-item/add-item';
import { User } from '../../models/users/users.interface';
=======
import { AngularFireAuth } from 'angularfire2/auth';
import { AddItemsPage } from '../add-items/add-items';
import { AddItem } from '../../models/add-item/add-item.interface';
import { EditItemPage } from '../edit-item/edit-item';
// import { User } from '../../models/user/user.interface';
>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
<<<<<<< HEAD


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
=======
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
>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac
      buttons: [
        {
          text: 'Edit',
          handler: () => {
<<<<<<< HEAD
            this.navCtrl.push(EditItemPage, {addItemId: addItem.$key});
=======
            this.navCtrl.push(EditItemPage, { addItemId: addItem.$key });
>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac
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
<<<<<<< HEAD
    this.navCtrl.push(AddItemPage);
  }
  
=======
    this.navCtrl.push(AddItemsPage);
  }

>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac
}
