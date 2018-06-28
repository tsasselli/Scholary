import { Subjects } from './../models/subjects';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjects$: Observable<Subjects[]>;

  constructor(public afs: AngularFirestore) { 
    const subjects: AngularFirestoreCollection<Subjects> = this.afs.collection('subjects');
    this.subjects$ = subjects.valueChanges();
  }

  createSubject(subject, schoolName, className, uid, userImage, subjectId) {
    this.afs.collection('subjects').add({
        title: subject,
        classId: schoolName,
        schoolId: className,
        uid: uid,
        userImage: userImage,
        subId: subjectId
      }
    )};
}
