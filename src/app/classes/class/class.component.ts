import { Class } from './../../models/class';
import { ClassService } from './../../services/class.service';
import { SchoolService } from './../../services/school.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  class$;
  class: Class[] = [];
  schoolName: string;

  constructor(private afs: AngularFirestore,
              private route: ActivatedRoute,
              private classService: ClassService) { }

  ngOnInit() {
      this.class$ =  this.route.paramMap.pipe(
      switchMap(params => {
        const name = params.get('name');
        const nameRef = this.classService.getClass(name);
        this.schoolName = name;
         return nameRef
       }));
  }

}
