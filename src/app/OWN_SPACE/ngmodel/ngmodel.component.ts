import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngmodel',
  templateUrl: './ngmodel.component.html',
})
export class ngmodelComponent {
  title: string = 'this is title';
}

/*
  The Angular uses the ngModel directive to achieve the two-way binding on HTML
  [()] Banana in a box
*/
