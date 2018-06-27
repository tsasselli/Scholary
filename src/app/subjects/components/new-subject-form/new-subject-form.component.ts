import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SubjectService } from './../../../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { Subjects } from '../../../models/subjects';

@Component({
  selector: 'app-new-subject-form',
  templateUrl: './new-subject-form.component.html',
  styleUrls: ['./new-subject-form.component.scss']
})
export class NewSubjectFormComponent implements OnInit {

  subject$: Observable<Subjects[]>;

  constructor(private subjectService: SubjectService,
    private router: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subject$ = this.subjectService.subjects$
    this.actRoute.snapshot.params['name'];
  }

  createNewSubject(subjectForm) {
    this.subjectService.createSubject(subjectForm);
    subjectForm.title = '';
  }

}
