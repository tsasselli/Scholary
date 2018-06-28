import { ActivatedRoute } from '@angular/router';
import { LinksService } from './../../services/links.service';
import { SubjectService } from './../../services/subject.service';
import { Subjects } from './../../models/subjects';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Links } from '../../models/links';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subject$: Observable<Subjects[]>;
  subjectID: string;
  classId: string;
  schoolId: string;

  constructor(private subjectService: SubjectService,
              private linkService: LinksService,
              private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.classId = this.actRoute.snapshot.params['className'];
    this.schoolId = this.actRoute.snapshot.params['name'];
    this.subject$ = this.subjectService.getSubjectsById(this.schoolId, this.classId)
    this.subjectService.subjects$.subscribe(data => {
        return data.map(sub => {
          this.subjectID = sub.subId;
        });
    })}
}
