import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule, coreRoutedComponents } from './core-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../../environments/environment.prod';
import { UserProfileComponent } from '../Auth/components/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AngularFireAuth,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [coreRoutedComponents]
})

export class CoreModule { }
