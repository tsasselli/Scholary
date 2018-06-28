import { Links } from './../../../models/links';
import { Subjects } from './../../../models/subjects';
import { AuthService } from './../../../core/auth.service';
import { LinksService } from './../../../services/links.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Users } from '../../../models/users';
import { Subscribe } from '@firebase/util';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-link',
  templateUrl: './new-link.component.html',
  styleUrls: ['./new-link.component.scss']
})
export class NewLinkComponent implements OnInit, OnDestroy {

  subject$: string;
  @Input('subjectID') subjectID: string;
  user: Users;
  sub: Subscription;
  classId: string;
  schoolId: string;

  constructor(private linkService: LinksService,
              private authServ: AuthService, 
              private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subjectID = this.subjectID.replace(/\s/g, "").toLowerCase();
    this.classId = this.actRoute.snapshot.params['className'];
    this.schoolId = this.actRoute.snapshot.params['name'];
    this.sub = this.authServ.user.subscribe(user => {
    this.user = user;
    }, error => {
      console.log(error);
    });
  }

  createNewLink(linkForm) {
    this.linkService.addLink(linkForm.link, this.user, this.subjectID, this.classId, this.schoolId );
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
