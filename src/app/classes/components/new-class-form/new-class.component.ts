import { Users } from './../../../models/users';
import { switchMap, map } from 'rxjs/operators';
import { Class } from '../../../models/class';
import { ClassService } from '../../../services/class.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { School } from '../../../models/school';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.scss']
})
export class NewClassComponent implements OnInit, OnDestroy {

  schoolName: string;
  sub: Subscription;
  user: Users; 

  constructor(private classService: ClassService, 
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.schoolName = this.route.snapshot.params['name'];
    this.sub = this.authService.user.subscribe(user => {
      this.user = user;
    });
  }

  createNewClass(classForm) {
    const classId: string = classForm.name.replace(/\s/g, "").toLowerCase();
    const newClass = new Class(classForm.name, classForm.imageUrl, classForm.description, this.schoolName, classId, this.user.uid, this.user.displayName)
    this.classService.createClass(newClass);
    this.router.navigate([`/school/` + `${this.schoolName}` + '/classrooms']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
