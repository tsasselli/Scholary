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

  constructor(private subjectService: SubjectService,
              private linkService: LinksService) { }

  ngOnInit() {
    this.subject$ = this.subjectService.subjects$
    this.subjectService.subjects$.subscribe(data => {
        return data.map(sub => {
          this.subjectID = sub.subId;
          console.log(this.subjectID);
        });
    })}
}
