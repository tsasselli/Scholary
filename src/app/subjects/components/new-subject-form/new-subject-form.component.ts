import { Users } from './../../../models/users';
import { AuthService } from './../../../core/auth.service';
import { Subjects } from './../../../models/subjects';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SubjectService } from './../../../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { Links } from '../../../models/links';

@Component({
  selector: 'app-new-subject-form',
  templateUrl: './new-subject-form.component.html',
  styleUrls: ['./new-subject-form.component.scss']
})
export class NewSubjectFormComponent implements OnInit {

  className: string;
  schoolName: string;
  user: Users;
  sub: Subscription;

  constructor(private subjectService: SubjectService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private auth: AuthService) { }

  ngOnInit() {
    this.schoolName = this.actRoute.snapshot.params['name'];
    this.className = this.actRoute.snapshot.params['className'];
    this.sub = this.auth.user.subscribe(user => {
      this.user = user;
    })
    
  }

  createNewSubject(subjectForm) {
    const subMini: string = subjectForm.title.replace(/\s/g, "").toLowerCase();
    this.subjectService.createSubject(subjectForm.title, this.schoolName, this.className, this.user.uid, this.user.photoURL, subMini);
    subjectForm.title = '';
  }

}
