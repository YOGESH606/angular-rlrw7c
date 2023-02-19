import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }

  //@Input('appClass') set display(value: Object)
  @Input() set appClass(value: Object){
    let entries = Object.entries(value)
    //console.log(entries)
    for(let [className, condition] of entries){
      if(condition){
        this.renderer.addClass(this.element.nativeElement,className)
      }
    }
  }
}

/*
---------Object.entires-------------

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'johndoe@example.com'
};
const entries = Object.entries(person);
console.log(entries);
// Output: [["firstName", "John"], ["lastName", "Doe"], ["age", 30], ["email", "johndoe@example.com"]]

--------Array Destructuring--------------

entries = [ ['container',true], ['change-font', true] ]

[className, condition] of entries
->0 className = container , condition = true
->1 className = change-font , condition = true

*/