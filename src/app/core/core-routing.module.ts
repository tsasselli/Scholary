import { ClassComponent } from './../classes/class/class.component';
import { SchoolComponent } from './../schools/components/school/school.component';
import { NewClassComponent } from './../classes/components/new-class/new-class.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NewSchoolComponent } from '../schools/components/new-school/new-school.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: UserProfileComponent },
  { path: 'school', component: SchoolComponent }, 
  { path: 'school/new', component: NewSchoolComponent },
  { path: 'school/:name', component: ClassComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

export const coreRoutedComponents = [UserProfileComponent, WelcomeComponent, SchoolComponent, NewSchoolComponent, ClassComponent ];
