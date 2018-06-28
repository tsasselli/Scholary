import { Links } from './../../../models/links';
import { Observable } from 'rxjs';
import { LinksService } from './../../../services/links.service';
import { Subjects } from './../../../models/subjects';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  @Input('subjectID') subjectID: string;
  link$: Observable<Links[]>;
  subject$;

  constructor(private linkService: LinksService, 
              ) { }

  ngOnInit() {
    console.log(this.subjectID)
     this.linkService.getLinksWithSub(this.subjectID );
     this.linkService.linkSubject.subscribe(link => {
      return link.map(linkData => {
        this.subject$ = linkData.subjectId
      })
     })
  }

}
