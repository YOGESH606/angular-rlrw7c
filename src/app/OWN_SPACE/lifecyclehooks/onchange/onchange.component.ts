import { Component, Input } from '@angular/core';

@Component({
  selector: 'onchange',
  templateUrl: './onchange.component.html',
})
export class OnChangeComponent {
  @Input() name: string;
  @Input() count: number = 0;

  ngOnChanges() {
    this.count++;
  }
}

/* 
  ngOnChanges fires when
  1. Input Bound Property Changes like setTimeout change name after 3000 milisecond in appcomponent
  2. Fires upon Intialization of Input Data like first initilization of name in appcomponent
  3.In case of Obj as a Input() 
    example. emp = {name:"yogesh"} In parent componet
    this.emp.name = "xyz"      -> does not call ngOnChanges in child. In this case we can use ngDoCheck.
    this.emp = { name:"rahul"} -> call ngOnChanges in child
*/
