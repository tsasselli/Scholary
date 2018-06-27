import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { School } from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  school: Observable<School[]>;

  constructor(public afs: AngularFirestore) { 
    const schools: AngularFirestoreCollection<School> = this.afs.collection('school');
    this.school = schools.valueChanges();
  }

  createSchool(school) {
    const schoolRef: AngularFirestoreCollection<School> = this.afs.collection('school');
    const data: School = {
      name: school.name,
      description: school.description,
      imageUrl: school.imageUrl,
      url: school.url,
      uid: school.uid
    }
    return schoolRef.doc(school.url).set(data);
  }
}
