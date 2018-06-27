import { switchMap, map } from 'rxjs/operators';
import { Class } from '../../../models/class';
import { ClassService } from '../../../services/class.service';
import { Component, OnInit, Input } from '@angular/core';
import { School } from '../../../models/school';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.scss']
})
export class NewClassComponent implements OnInit {

  schoolName: string;

  constructor(private classService: ClassService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.schoolName = this.route.snapshot.params['name'];
    console.log(this.schoolName);

  }

  createNewClass(classForm) {
    const classId: string = classForm.name.replace(/\s/g, "").toLowerCase();
    const newClass = new Class(classForm.name, classForm.imageUrl, classForm.description, this.schoolName, classId)
    this.classService.createClass(newClass);

  }

}
