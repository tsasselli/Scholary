import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { School } from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  school: Observable<School>;

  constructor(public afs: AngularFirestore) { 
    
  }
}
