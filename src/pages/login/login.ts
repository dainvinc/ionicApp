import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/users/users.interface';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private af: AngularFireAuth) {
  }
  
  async login(user: User) {
    try {
      const res = this.af.auth.signInWithEmailAndPassword(user.email, user.password);
      if(res) {
        this.navCtrl.setRoot(HomePage);  
      }
    } catch(Exception e) {
      console.log(e);
    }
      
  }
}
