import { Links } from './../../../models/links';
import { Observable } from 'rxjs';
import { LinksService } from './../../../services/links.service';
import { Subjects } from './../../../models/subjects';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  @Input('subjectID') subjectID: string;
  link$: Observable<Links[]>;
  subject$;
  classId: string;
  schoolId: string;
  

  constructor(private linkService: LinksService,
              private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.classId = this.actRoute.snapshot.params['className'];
    this.schoolId = this.actRoute.snapshot.params['name'];
    this.subjectID = this.subjectID.replace(/\s/g, "").toLowerCase();
     this.link$ = this.linkService.getLinksWithSub(this.subjectID, this.classId, this.schoolId);
     console.log(this.link$);
  }

}
