//@HostBinding in angular
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  //The @HostBinding decorator binds a host element property to a variable in a directive or a component.
  @HostBinding('style.backgroundColor') background: string = 'transparent';
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') mouseenter() {
    this.background = 'pink';
    this.border = 'red 2px solid';
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = 'transparent';
    this.border = 'none';
  }
}
