import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './core/auth.service';
import { CoreModule } from './core/core.module';
import { NewClassLinkComponent } from './classes/components/new-class-link/new-class-link.component';

@NgModule({
  declarations: [
    AppComponent,
    NewClassLinkComponent,
    
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
