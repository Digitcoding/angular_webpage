import { Component, Injectable, OnInit } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable, Observer, filter } from 'rxjs';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { AuthService } from './auth.service';
export abstract class FormCanDeactivate {
  abstract canDeactivatefc(): boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<unknown> {
  message: any;
  constructor(private dialogservice: DialogService,
    private authservice: AuthService) {
    this.authservice.messages.subscribe(res => this.message = res);
  }


  canDeactivate(
    component: FormCanDeactivate,
  ): Observable<boolean> | boolean {


    if (!component.canDeactivatefc()) {
      console.log('inside if');

      return new Observable((observer: Observer<boolean>) => {


        const dialogRef = this.dialogservice.openConfirmationDialog(this.message.UNSAVED);
        dialogRef.afterClosed().pipe(filter((result: boolean) => {
          return result;
        })).subscribe((res) => {
          observer.next(true);
          observer.complete();
        });
      })
    } else {
      console.log('inside else');
      return true;
    }
  }
}
