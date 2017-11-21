// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { AngularFireAuth } from 'angularfire2/auth';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import firebase from 'firebase';

// /*
//   Generated class for the AuthProvider provider.

//   See https://angular.io/docs/ts/latest/guide/dependency-injection.html
//   for more info on providers and Angular DI.
// */
// @Injectable()
// export class AuthProvider {
//   public fireAuth: any;
//   public userData: any;

//   constructor(
//     public http: Http,
//     private af: AngularFireAuth) {
//       this.fireAuth = firebase.auth();
//       this.userData = firebase.database().ref('/userData');
//       console.log('Hello AuthProvider Provider');
//     }
  
//   loginWithEmail(credentials) {
//     return Observable.create(observer => {
//       this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password
//       ).then((authData) => {
//         observer.next(authData);
//       }).catch((error) => {
//         observer.error(error);
//       });
//     });
//   }
// }
