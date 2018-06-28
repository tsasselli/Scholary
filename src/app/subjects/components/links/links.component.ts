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
  

  constructor(private linkService: LinksService) { }

  ngOnInit() {
    this.subjectID = this.subjectID.replace(/\s/g, "").toLowerCase();
    console.log(this.subjectID)
     this.link$ = this.linkService.getLinksWithSub(this.subjectID );
     console.log(this.link$);
    //  this.linkService.linkSubject.subscribe(link => {
    //   return link.map(linkData => {
    //     this.subject$ = linkData;
    //     console.log(linkData);
    //   })
    //  });
  }

}
