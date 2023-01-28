import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { Child1Component } from './child1.component';

@Component({
  selector: 'afterviewinit',
  templateUrl: './afterViewInit.component.html',
})
export class AfterViewInitComponent {
  @ViewChild('btnCounter') btnCounter: ElementRef;
  @ContentChild(Child1Component) childObj: Child1Component;

  ngDoCheck(){
    console.log("ngDoCheck called ")
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called ' + this.childObj.Address);
  }
  ngAfterContentChecked() {
    console.log(' ngAfterContentChecked called ' + this.childObj.Address);
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit '+ this.childObj.Address)
    this.btnCounter.nativeElement.style.display="none"
    console.log(this.btnCounter.nativeElement.style.display)
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked '+ this.childObj.Address)
  }
}
