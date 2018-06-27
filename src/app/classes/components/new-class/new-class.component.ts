import { Class } from './../../../models/class';
import { ClassService } from './../../../services/class.service';
import { Component, OnInit, Input } from '@angular/core';
import { School } from '../../../models/school';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.scss']
})
export class NewClassComponent implements OnInit {

  @Input('school') school: School;

  constructor(private classService: ClassService) { }

  ngOnInit() {
  }

  createNewClass(classForm) {
    const classId: string = classForm.name.replace(/\s/g, "").toLowerCase();
    const newClass = new Class(classForm.name, classForm.imageUrl, classForm.description, this.school.url, classId)
    this.classService.createClass(newClass);

  }

}
