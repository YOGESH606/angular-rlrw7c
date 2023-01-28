import { Component, Input} from '@angular/core';

@Component({
  selector: 'oninit',
  templateUrl: './oninit.component.html',
})
export class OnInitComponent {
  @Input() name: string;

  count: number = 0;

  ngOnInit() {
    this.count++;
  }
}

/* 
  Invoked once the component is initialized.
  
  ngOnInit fires right after
  1. after the data renders to the ChildComponent template. like when name and number render

*/