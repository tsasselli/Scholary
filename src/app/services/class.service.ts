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
      }));
  }

  createClass(classForm) {
    const classRef = this.afs.collection<Class>("class");
    const data: Class = {
      name: classForm.name,
      description: classForm.description,
      imageUrl: classForm.imageUrl,
      schoolId: classForm.schoolId,
      classId: classForm.classId
    }
    return classRef.add(data)
  }
  
}


