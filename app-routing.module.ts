import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiformComponent } from './core/componants/multiform/multiform.component';

import { NavbarComponent } from './core/componants/navbar/navbar.component';
import { PipeComponent } from './core/componants/pipe/pipe.component';
import { SnackbarpracticeComponent } from './core/componants/snackbarpractice/snackbarpractice.component';
import { DashboardComponent } from './core/componants/dashboard/dashboard.component';
import { InfoComponent } from './core/componants/info/info.component';
import { TimesheetComponent } from './core/componants/timesheet/timesheet.component';
import { AbsenceComponent } from './core/componants/absence/absence.component';
import { GeneralComponent } from './core/componants/general/general.component';
import { ContactComponent } from './core/componants/contact/contact.component';
import { SigninComponent } from './core/componants/signin/signin.component';
import { AuthGuard } from './core/componants/auth/auth.guard';
import { AccessGuard } from './core/componants/auth/access.guard';
import { LogoutGuard } from './core/componants/auth/logout.guard';
import { CandeactivateGuard } from './core/componants/auth/candeactivate.guard';



const routes: Routes = [

  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent, canActivate: [LogoutGuard] },
  {
    // path: 'app', component: NavbarComponent, canActivate: [AuthGuard], canActivateChild: [AccessGuard], children: [
    path: 'app', component: NavbarComponent,canActivate: [AuthGuard], canActivateChild: [AccessGuard], children: [
   
      {
        path: 'info', redirectTo: 'info/general'
      },
      {
        path: 'info', component: InfoComponent, children: [
          { path: 'general', component: GeneralComponent, canDeactivate: [CandeactivateGuard] },
          { path: 'general/:data/:employeecode', component: GeneralComponent },
          { path: 'contact', component: ContactComponent }
        ]
      }
      ,
      { path: 'timesheet', component: TimesheetComponent },
      { path: 'absent', component: AbsenceComponent }
    ]

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
