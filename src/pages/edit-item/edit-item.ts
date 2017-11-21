import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
<<<<<<< HEAD
import { Subscription } from 'rxjs/Subscription';
import { AddItem } from '../../models/add-item/add-item.interface';
=======
import { AddItem } from '../../models/add-item/add-item.interface';
import { Subscription } from 'rxjs/Subscription';
>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac

/**
 * Generated class for the EditItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
<<<<<<< HEAD
export class EditItemPage {
  addItemSubscription: Subscription;
  itemListRef$: FirebaseObjectObservable<AddItem>;
  
  addItem = {} as AddItem;

=======

export class EditItemPage {

  addItemSubscription: Subscription;
  itemListRef$: FirebaseObjectObservable<AddItem>;
  addItem = {} as AddItem;
  
>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase) {
<<<<<<< HEAD
=======
      
>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac
      const addItemId = this.navParams.get('addItemId');
      console.log(addItemId);
      
      this.itemListRef$ = this.database.object(`home/${addItemId}`);
      
      this.addItemSubscription = this.itemListRef$.subscribe(
<<<<<<< HEAD
        addItem => this.addItem = addItem
      );
  }
  
=======
        addItem => this.addItem = addItem);
  }

>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac
  editItem(addItem: AddItem) {
    this.itemListRef$.update(addItem);
    
    this.navCtrl.pop();
  }
  
  ionViewWillLeave() {
    this.addItemSubscription.unsubscribe();
  }
<<<<<<< HEAD
=======

>>>>>>> 5feca38c31545f699e689cfebe0236494cec8bac
}
