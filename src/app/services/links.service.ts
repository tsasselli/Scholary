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

  addLink(link, user: Users, subject: string) {
    this.afs.collection('links').add({
      link: link,
      userName: user.displayName,
      userImage: user.photoURL,
      subjectId: subject,
      uid: user.uid
    })
  }

  getLinksWithSub(subject: string) {
    const subjects: AngularFirestoreCollection<Links> = this.afs.collection('links', ref => {
      return ref.where(`${subject}`, '==', 'subjectId')
    });
    this.linkSubject = subjects.valueChanges();
  }
}
