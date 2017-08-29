import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { AddItem } from '../../models/add-item/add-item.interface';

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
export class EditItemPage {
  addItemSubscription: Subscription;
  itemListRef$: FirebaseObjectObservable<AddItem>;
  
  addItem = {} as AddItem;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase) {
      const addItemId = this.navParams.get('addItemId');
      console.log(addItemId);
      
      this.itemListRef$ = this.database.object(`home/${addItemId}`);
      
      this.addItemSubscription = this.itemListRef$.subscribe(
        addItem => this.addItem = addItem
      );
  }
  
  editItem(addItem: AddItem) {
    this.itemListRef$.update(addItem);
    
    this.navCtrl.pop();
  }
  
  ionViewWillLeave() {
    this.addItemSubscription.unsubscribe();
  }
}
