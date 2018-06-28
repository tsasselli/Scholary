import { Subjects } from './../models/subjects';
import { Observable } from 'rxjs';
import { Links } from './../models/links';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  link$: Observable<Links[]>;
  linkSubject: Observable<Links[]>;
  
  constructor(public afs: AngularFirestore) {
    const subjects: AngularFirestoreCollection<Links> = this.afs.collection('links');
    this.link$ = subjects.valueChanges();
  }

  addLink(link, user: Users, subject: string, classId, schoolId) {
    this.afs.collection('links').add({
      link: link,
      userName: user.displayName,
      userImage: user.photoURL,
      subjectId: subject,
      classId: classId,
      schoolId: schoolId,
      uid: user.uid
    })
  }

  getLinksWithSub(subject: string, classId, schoolId): Observable<Links[]> {
    const subjectsLinkRef: AngularFirestoreCollection<Links> = this.afs.collection('links', ref => {
      return ref.where(`subjectId`, '==', `${subject}`)
       .where('classId', '==', `${classId}`)
       .where('schoolId', '==', `${schoolId}`);
       
    });
    const subjObsv = subjectsLinkRef.valueChanges();
    return subjObsv;
  }
}
