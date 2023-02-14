//renderer 2 in Angular
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(element);
  }
//Angular keep component and view in sync using template, data binding & change Detection etc. All of them bypassed when we update DOM directly.
  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#F1948A'
    );
    this.renderer.addClass(this.element.nativeElement, 'container');
    this.renderer.setAttribute(this.element.nativeElement,'title','This exmaple div')
  }
}
