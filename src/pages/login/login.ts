import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user/user.interface';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  user = {} as User;
  
  // loginForm: FormGroup;
  // email: AbstractControl;
  // password: AbstractControl;
  // error: any;
  
  constructor(
    public navCtrl: NavController, 
    // private fb: FormBuilder,
    // public auth: AuthProvider,
    private af: AngularFireAuth) {
      // this.loginForm = this.fb.group({
      //   'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
      //   'password': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
      // });
      // this.email = this.loginForm.controls['email'];
      // this.password = this.loginForm.controls['password'];
  }

  async login(user: User) {
    try {
      const res = this.af.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(res);
      if(res) {
        this.navCtrl.setRoot(HomePage);
      }
    } catch(e) {
      console.log(e);
      alert("Please enter valid email/password");
      // console.log(user.email);
    }
  }
}
