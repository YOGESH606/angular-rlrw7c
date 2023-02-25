import { Component, OnInit } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-angular-observables',
  templateUrl: './angular-observables.component.html',
  styleUrls: ['./angular-observables.component.css'],
})
export class AngularObservablesComponent implements OnInit {
  title: string = 'AngularObservable';

  constructor() {}

  //1. creation of obserable using constructor
  /*
    myObservable = new Observable((observer) => {
    console.log('Observable Start');
    setTimeout(()=>{observer.next('1')},1000)
    setTimeout(()=>{observer.next('2')},2000)
    setTimeout(()=>{observer.next('3')},3000)
    setTimeout(()=>{observer.error(new Error('Somthing went wrong. Please try again later!'))},3500)
    setTimeout(()=>{observer.next('4')},4000)
    setTimeout(()=>{observer.complete()},5000)

    // observer.next('1');
    // observer.next('2');
    // observer.next('3');
    // observer.next('4');
  });
  //------------------------------------------------------------------------------------
  */

  //2. creation of observable using create method.
  /*
  myObservable = Observable.create((observer)=>{
    console.log('Observable Start');
    setTimeout(()=>{observer.next('A')},1000)
    setTimeout(()=>{observer.next('B')},2000)
    setTimeout(()=>{observer.next('C')},3000)
    setTimeout(()=>{observer.error(new Error('Somthing went wrong. Please try again later!'))},3500)
    setTimeout(()=>{observer.next('D')},4000)
    setTimeout(()=>{observer.complete()},5000)
  })
  //------------------------------------------------------------------------------------
  */
  array1 = [1,2,3,4,5,6,7];
  array2 = ['A','B','C','D','D'];

  //3. Creation of observable using of method.
  //myObservable = of(this.array1,this.array2,'Yogesh','Rushi');

  /*
    The of method creates an observable that emits a sequence of values and then completes. You can pass any number of arguments to the of method, and each argument will be emitted in the sequence.
  //------------------------------------------------------------------------------------
  */
  
  //4. creation of observable using from method.
  myObservable = from(this.array1);
  /*
    The from method creates an observable from an array, iterable, promise, or another observable. It will emit each item in the sequence one by one.

    In summary, the of method creates an observable that emits a sequence of values, while the from method creates an observable from an array, iterable, promise, or another observable.
    //------------------------------------------------------------------------------------
  */

  //Understanding operator of RxJS
  /*
  transformedObs = this.myObservable.pipe(map((val)=>{
    return val*5;
  }))

  filteredObs = this.transformedObs.pipe(filter((val)=>{
    return val >= 30;
  }))

  Or we can write it as below
  */

  transformedObs = this.myObservable.pipe(map((val)=>{
    return val*5;
  }),filter((val)=>{
    return val >= 30;
  }))

  ngOnInit() {
    this.transformedObs.subscribe((val)=>{
      console.log(val)
    },(error)=>{
      alert(error)
    },()=>{
      alert('Obaservable has complete emitting all value.')
    });
  }
}
