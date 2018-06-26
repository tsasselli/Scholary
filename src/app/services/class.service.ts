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
  classRef: AngularFirestoreCollection<Class>;
  class: any;

  constructor(public afs: AngularFirestore) {
    this.classRef = this.afs.collection('class');
    this.class$ = this.classRef.valueChanges(); 
  }

  getClass(school) {
    const classReference = this.afs.collection('class', ref => ref.where('schoolId', '==', school));

    return classReference.valueChanges().pipe(
      map(data => {
        console.log(data);
        return data
      }))
    
    // const query = classReference.where('schoolId', '==', school);
    // return this.afs.collection('class').valueChanges().pipe(
    //   map(data => {
    //     console.log(data);
    //     return data
    //     })
    // )
    // return this.afs.collection('class').doc(`${school}`).snapshotChanges().pipe(
    //   map(a => {
    //       const data = a.payload.data() as Class;
    //       const id = a.payload.id;
    //       console.log(id);
    //       console.log(data);
    //       return { id, data };
    //     })
    // )

    //  return this.afs.collection('class', ref => {
    //  return ref.where('schoolId', '==', school)
    //});
        // const classCollection: AngularFirestoreCollection<Class> = this.afs.collection('school').doc(`${schoolName}`).collection('classes');
    // return classCollection.snapshotChanges().pipe(
    //   map(changes => {
    //     return changes.map(
    //       a => {
    //         const data = a.payload.doc.id;
    //         console.log(data);
    //         return data
    //       }
    //     )
    //   })
    // );

    }
}
