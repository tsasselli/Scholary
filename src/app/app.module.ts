import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchoolComponent } from './schools/components/school/school.component';
import { NewSchoolComponent } from './schools/components/new-school/new-school.component';
import { NewClassComponent } from './schools/components/new-class/new-class.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    NewSchoolComponent,
    NewClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
