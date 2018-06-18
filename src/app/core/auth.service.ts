import { Users } from './../models/users';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


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
                    // checks if user and returns Users doc based on uid from Users Doc in DB
                    // and listens for value changes by returning an observable
                    if (user) {
                      return this.afs.doc<Users>(`users/${user.uid}`).valueChanges() 
                    } else {
                      return Observable.of(null)
                    }
                }))
               }

    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      return this.oAuthLogin(provider);
    }

    // Returns the popup for the given provider
    // then creates the user credential in the database
    private oAuthLogin(provider) {
      return this.afAuth.auth.signInWithPopup(provider)
        .then((credential) => {
          this.updateUserData(credential.user)
        })
    }

    // Helper function that that allows us to pass user object to the db.
    private updateUserData(user) {
      // sets user data to firestore on login 
      const userRef: AngularFirestoreDocument<Users> = this.afs.doc(`users/${user.uid}`);
      
      const data: Users = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      }
      return userRef.set(data)
    }
  }
