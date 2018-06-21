import { Router } from '@angular/router';
import { School } from './../../../models/school';
import { SchoolService } from '../../../services/school.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-school',
  templateUrl: './new-school.component.html',
  styleUrls: ['./new-school.component.scss']
})
export class NewSchoolComponent implements OnInit {

  constructor(private schoolService: SchoolService,
              private router: Router) { }
  school$;

  ngOnInit() {

   this.school$ =  this.schoolService.school

  }

  createNewSchool(schoolForm) {
    const school = new School(schoolForm.name, schoolForm.description, schoolForm.imageUrl);
    this.schoolService.createSchool(school);
    this.router.navigate(['/school']);
    }
    }
