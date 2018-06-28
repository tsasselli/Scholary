import { Subjects } from './../../../models/subjects';
import { AuthService } from './../../../core/auth.service';
import { LinksService } from './../../../services/links.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Users } from '../../../models/users';
import { Subscribe } from '@firebase/util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-link',
  templateUrl: './new-link.component.html',
  styleUrls: ['./new-link.component.scss']
})
export class NewLinkComponent implements OnInit, OnDestroy {

  subject$: string;
  @Input('subject') subject: Subjects;
  user: Users;
  sub: Subscription;

  constructor(private linkService: LinksService,
              private authServ: AuthService) { }

  ngOnInit() {
   this.sub = this.authServ.user.subscribe(user => {
     this.user = user;
   });
  
  }


  createNewLink(linkForm) {
    this.linkService.addLink(linkForm.link, this.user, this.subject.subId);
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
