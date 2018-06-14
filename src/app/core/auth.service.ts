import { Users } from './../models/users';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<Users>;

  constructor(public afAuth: AngularFireAuth,
              public afs: AngularFirestore,
              public router: Router) {

                this.user = this.afAuth.authState.pipe(
                  switchMap(user => {
                    if (user) {
                      return this.afs.doc<Users>(`users/${user.uid}`).valueChanges()
                    } else {
                      return Observable.of(null)
                    }
                }))
               }


  
  // doGoogleLogin() {
  //   return new Promise<any>((resolve, reject) => {
  //     let provider = new firebase.auth.GoogleAuthProvider();
  //     provider.addScope('profile');
  //     provider.addScope('email');
  //     this.afAuth.auth
  //       .signInWithPopup(provider)
  //       .then(res => {
  //         resolve(res);
  //       })
  //   })
  // }
}
