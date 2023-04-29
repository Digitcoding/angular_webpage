import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Person } from '../models/person.model';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-multiform',
  templateUrl: './multiform.component.html',
  styleUrls: ['./multiform.component.scss']
})
export class MultiformComponent {
  destroy!:Subscription;
  constructor(private _formBuilder: FormBuilder) { }
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  istrue = true;
  isfalse = false;
  
  details: Person[] = [
    { name: 'parameswari', age: 20, istrue: false },
    { name: 'aishari', age: 24, istrue: true },
    { name: 'hariharan', age: 50, istrue: false }];

  green = {
    'font-style': this.isfalse ? 'italic' : 'normal',
    'font-weight': this.isfalse ? 'bold' : 'normal',
    'font-size': this.isfalse ? '24px' : '12px',
    'background-color': this.isfalse ? 'gray' : 'yellow'
  };
  red = {

    'font-style': this.istrue ? 'italic' : 'normal',
    'font-weight': this.istrue ? 'bold' : 'normal',
    'font-size': this.istrue ? '24px' : '12px',
    'background-color': this.istrue ? 'crimson' : 'yellow'

  };
  funobservable1():Observable<number>{
    return new Observable(subscribe=>{
      
        subscribe.next(2089);
     
      
    })
 }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      firstCtrl: new FormControl(null, Validators.required)
    }),
      this.secondFormGroup = new FormGroup({
        secondCtrl: new FormControl(null, Validators.required)
      });
      
  //   let obser=new Observable(subscribe=>{
  //    subscribe.next(400),
  //    subscribe.complete(),
  //    subscribe.next(500),
  //    subscribe.next(300),
  //    subscribe.error(),
  //    subscribe.next(100)
  //   });
  //   obser.subscribe({
  //     next: (res)=>{
  //   console.log("res",res);
  //   },
  //   // error: (err)=>{
  //   //   console.log('eror', err);
  //   // },
  //   complete: ()=>{
  //     console.log('complete');
      
  //   }
  // });
    
  // //  obser.pipe(map(x=> x*2).subscribe(re=>{
  // //     console.log("filter value",re);
      
  // //   })

  // // }
  // // ngOnDestroy(){
  // //   this.destroy.unsubscribe();
  // //   console.log('destroy');
    
  // // }
 var element=new Observable<number>((sub)=>{
  sub.next(200),
  sub.next(389),
  sub.next(500),
  sub.complete(),
     sub.next(300),
     sub.error(),
     sub.next(100)
     
 });
 element.subscribe({
  next: (res)=>{
  console.log('response',res)
  },
  error: (err)=>{
    console.log('error',err);
  },
  complete: ()=>{
    console.log('completed');
    
  }
});
 element.pipe(map(x=>x*2)).subscribe(res=>{
  console.log('map', res);
  
 });
 element.pipe(filter(x=>x>200)).subscribe(res=>{
  console.log('resfilter', res);
  
 });
this.destroy=this.funobservable1().subscribe(res=>{
  console.log('rs',res);
  
})
  
}
ngOnDestroy(){
  this.destroy.unsubscribe();
}
show=false;
oncall(){
  this.show=!this.show;
}
}

