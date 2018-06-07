import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchoolComponent } from './schools/components/school/school.component';
import { NewSchoolComponent } from './schools/components/new-school/new-school.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    NewSchoolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
