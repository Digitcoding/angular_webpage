import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private _snackBar: any;

  constructor() { 
    this._snackBar.open("message", "helo",{
      duration:300000,
      panelClass:'success'
    });
  }
}
