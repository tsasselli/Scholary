import { Class } from './../models/class';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  class$: Observable<Class[]>;

  constructor(public afs: AngularFirestore) { 
  }

  getClass(schoolName) {
    const classCollection: AngularFirestoreCollection<Class> = this.afs.collection('school').doc(`${schoolName}`).collection('classes');
    return classCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.id;
            console.log(data);
            return data;
          }
        )
      })
    );
  }


}
