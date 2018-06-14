import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchoolComponent } from './schools/components/school/school.component';
import { NewSchoolComponent } from './schools/components/new-school/new-school.component';
import { NewClassComponent } from './classes/components/new-class/new-class.component';
import { SharedLinkComponent } from './subjects/components/shared-link/shared-link.component';
import { ShareLinkComponent } from './subjects/components/share-new-link/share-link.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    NewSchoolComponent,
    NewClassComponent,
    SharedLinkComponent,
    ShareLinkComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
