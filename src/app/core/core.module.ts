import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule, coreRoutedComponents } from './core-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../../environments/environment.prod';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UpvoteButtonComponent } from './components/upvote-button/upvote-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [coreRoutedComponents, NotFoundComponent, UpvoteButtonComponent],
  providers: [AuthService],
})

export class CoreModule { }
