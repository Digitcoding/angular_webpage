import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, interval, Observable, of, Subscription, take } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-snackbarpractice',
  templateUrl: './snackbarpractice.component.html',
  styleUrls: ['./snackbarpractice.component.scss']
})
export class SnackbarpracticeComponent {
  [x: string]: any;
  constructor(private _snackBar: MatSnackBar, private router:Router,) { }
  destroy!: Subscription;

  openSnackBar() {
  
  }
  onNavigate(){
    this.router.navigate(['multiform']);
  }
  normalfunction() {
    console.log('normal function');
    return 'normal calling function'
  }
  arrowfunction = () => {
    return 'i m arrow'
  }
  practice = new Observable(
    () => {
      console.log('observable');
    });
  practice2 = new Observable(
    obs => {
      console.log('start observable');
      obs.next('200');
      obs.next('300');
      setTimeout(() => {
        obs.next('400');

      }, 1000);
      console.log('End observable');
    }
  );

  ngOnInit() {
    const normalstore = this.normalfunction();
    console.log(normalstore);
    const arrowcal = this.arrowfunction();
    console.log(arrowcal);
    this.destroy = this.practice.subscribe();
    this.practice2.subscribe(st => {
      console.log(st);
    });
    const frequent = interval(1000).pipe(take(10));
    this.destroy = frequent.subscribe(sub => {
      console.log('freqyeb',sub);

    });
    const numbers=of(23,44,21,34,23).pipe(filter(x=>x%2==0));
    this.destroy=numbers.subscribe(subs=>{
      console.log('frequent',subs);
    })

  }
  ngOnDestroy() {
    this.destroy.unsubscribe();
  }



}

