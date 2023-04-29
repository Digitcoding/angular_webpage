import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { FlexModule } from '@angular/flex-layout/flex';
import { SnackbarpracticeComponent } from './componants/snackbarpractice/snackbarpractice.component';
import { PipeComponent } from './componants/pipe/pipe.component';
import { HighlighPipe } from './pipes/highligh.pipe';
import { FilesizePipe } from './pipes/filesize.pipe';
import { AppendPipe } from './pipes/append.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiformComponent } from './componants/multiform/multiform.component';
import { InfoComponent } from './componants/info/info.component';
import { TimesheetComponent } from './componants/timesheet/timesheet.component';
import { AbsenceComponent } from './componants/absence/absence.component';
import { DashboardComponent } from './componants/dashboard/dashboard.component';
import { GeneralComponent } from './componants/general/general.component';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ContactComponent } from './componants/contact/contact.component';
import { SigninComponent } from './componants/signin/signin.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SnackbarpracticeComponent,
    PipeComponent,
    HighlighPipe,
    FilesizePipe,
    AppendPipe,
    FilterPipe,
    MultiformComponent,
    InfoComponent,
    TimesheetComponent,
    AbsenceComponent,
    DashboardComponent,
    GeneralComponent,
    SqrtPipe,
    ContactComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    RouterModule

  ],
  exports: [
    NavbarComponent,
    MultiformComponent,
    DragDropModule
  ]
})
export class CoreModule { }
