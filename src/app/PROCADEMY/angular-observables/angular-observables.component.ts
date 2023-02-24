import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-angular-observables',
  templateUrl: './angular-observables.component.html',
  styleUrls: ['./angular-observables.component.css'],
})
export class AngularObservablesComponent implements OnInit {
  title: string = 'AngularObservable';

  constructor() {}

  //creation of obserable using constructor
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

  ngOnInit() {
    this.myObservable.subscribe((val)=>{
      console.log(val)
    },(error)=>{
      alert(error)
    },()=>{
      alert('Obaservable has complete emitting all value.')
    });
  }
}
