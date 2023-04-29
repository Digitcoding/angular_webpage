import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, filter, map, mergeMap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.scss']
})
export class AbsenceComponent {
  constructor(private authservice: AuthService) { }

  // ngOnInit() {
  //   var obser = new Observable<number>((sub) => {
  //     sub.next(200),
  //       sub.next(243),
  //       sub.complete(),
  //       sub.error()

  //   });
  //   // this.message.next('parameswari');
  //   this.authservice.messages.subscribe(messages => {
  //     console.log('message', messages);
  //   })
  //   obser.subscribe({
  //     next: (res) => {
  //       console.log('response', res);
  //     },
  //     error: (err) => {
  //       console.log('error', err);
  //     },
  //     complete: () => {
  //       console.log('completed');
  //     }
  //   });

  //   obser.pipe(map(x => x * 2)).subscribe(res => {
  //     console.log('map', res);

  //   });
  //   obser.pipe(filter(x => x > 200)).subscribe(res => {
  //     console.log('resfilter', res);

  //   });
  //   //  this.obserfunction().subscribe(res=>{
  //   //   console.log('function calling1',res);
  //   //   this.obserfunction2(res).subscribe(res2=>{
  //   //     console.log('function calling2',res2);/its works but not best practice
  //   //    })
  //   //  })
  //   this.obserfunction().pipe(mergeMap((res1) => {
  //     console.log('res1', res1);
  //     return this.obserfunction2(res1)
  //   }), mergeMap((res2) => {
  //     console.log('res2', res2);
  //     return this.obserfunction3(res2)
  //   })).subscribe((res3) => {
  //     console.log("res2", res3);
  //   });

  // }
  // destroy!: Subscription;
  // obserfunction(): Observable<number> {
  //   return new Observable(sub => {
  //     sub.next(344);
  //   });
  // }
  // obserfunction2(id: number): Observable<number> {
  //   return new Observable(sub2 => {
  //     sub2.next(234);
  //   })
  // }
  // obserfunction3(id: number): Observable<number> {
  //   return new Observable(sub3 => {
  //     sub3.next(300);
  //   })
  // }
  // ngOnDestroy() {
  //   this.destroy.unsubscribe();
  // }
  onclick() {
    this.authservice.messages.next('hariharan');
  }
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
