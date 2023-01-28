import { Component, Input } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
})
export class Child1Component {
  @Input() Address: string;

  update(){
    this.Address="maharashtra"
  }
}
