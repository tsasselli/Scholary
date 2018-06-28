import { Users } from './../../../models/users';
import { map } from 'rxjs/operators';
import { AuthService } from './../../../core/auth.service';
import { Router } from '@angular/router';
import { School } from './../../../models/school';
import { SchoolService } from '../../../services/school.service';
import { Component, OnInit } from '@angular/core';
import { User } from '@firebase/auth-types';

@Component({
  selector: 'app-new-school',
  templateUrl: './new-school.component.html',
  styleUrls: ['./new-school.component.scss']
})
export class NewSchoolComponent implements OnInit {

  constructor(private schoolService: SchoolService,
              private router: Router,
              private authService: AuthService) { }
  userId: string;

  ngOnInit() {
   this.authService.user.subscribe(user => {
     if(user) this.userId = user.uid
   });
  }

  createNewSchool(schoolForm) {
    const schoolUrl: string = schoolForm.name.replace(/\s/g, "").toLowerCase();
    const school = new School(schoolForm.name, schoolForm.description, schoolForm.imageUrl, schoolUrl, this.userId);
    this.schoolService.createSchool(school);
    this.router.navigate(['/school']);
    }
}
