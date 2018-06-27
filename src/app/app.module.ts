import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './core/auth.service';
import { CoreModule } from './core/core.module';
import { SubjectsComponent } from './subjects/subjects/subjects.component';
import { LinksComponent } from './subjects/components/links/links.component';
import { NewLinkComponent } from './subjects/components/new-link/new-link.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    NewLinkComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
