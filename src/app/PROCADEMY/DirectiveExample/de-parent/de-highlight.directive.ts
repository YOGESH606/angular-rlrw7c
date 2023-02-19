import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDeHighlight]'
})
export class DeHighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set appDeHighlight(condition: boolean){
    if(condition){
      this.renderer.addClass(this.element.nativeElement,'highlight')
    }
  }

}