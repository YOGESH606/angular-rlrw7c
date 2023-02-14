import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetbackground]',
})
export class SetbackgroundDirective {
  private element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  ngOnInit() {
    //console.log(this.element.nativeElement)
    this.element.nativeElement.style.backgroundColor = '#C8E6C9';
  }
}
