import { Component, Input } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() Address: string;

  update(){
    this.Address="maharashtra"
  }
}
