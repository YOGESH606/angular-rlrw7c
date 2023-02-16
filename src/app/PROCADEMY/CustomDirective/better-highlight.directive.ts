//@HostBinding in angular
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  //The @HostBinding decorator binds a host element property to a variable in a directive or a component.
  @Input() defaultColor : string = 'transparent';
  @Input('appBetterHighlight') highlightColor : string ='pink';
  @Input() title: string = 'This is Title';

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';

  ngOnInit(){
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter() {
    this.background = 'pink';
    this.border = 'red 2px solid';
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = 'transparent';
    this.border = 'none';
  }
}

function ngOnInit() {
throw new Error('Function not implemented.');
}
