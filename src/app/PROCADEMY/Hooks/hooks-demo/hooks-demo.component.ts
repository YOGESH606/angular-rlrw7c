import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks-demo',
  templateUrl: './hooks-demo.component.html',
  styleUrls: ['./hooks-demo.component.css']
})
export class HooksDemoComponent implements OnInit {

  @Input() value: string = 'procademy'

  constructor(){
    console.log('Constructor called!');
    //console.log(this.value);
  }

  ngOnChanges(change: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(change);
  }

  ngOnInit(){
    console.log('ngOnInit called!');
    //console.log(this.value);
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }
}