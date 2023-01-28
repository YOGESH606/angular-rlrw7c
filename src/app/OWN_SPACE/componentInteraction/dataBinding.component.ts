import { Component, EventEmitter, Input, Output } from '@angular/core';
import { employeeModel } from '../models/employee.models';

@Component({
  selector: 'databinding',
  templateUrl: './dataBinding.component.html',
})
export class DataBindingComponent {
  @Input() name: string;
  @Output() childEmt = new EventEmitter();

  employee: employeeModel = {
    name: 'Harshal Navale',
    deptNo: 25,
    loc: 'vadali',
  };

  passToParent() {
    this.childEmt.emit(this.employee);
    // console.log(this.employee);
  }
}

/*
EventEmitter is a class in angular framework. It has emit() method that emits custom events. We can use EventEmitter in custom event binding. 

@Input(): Defines input variable in component communication. It is used to communicate from parent to child component using property binding.

@Output(): Defines output variable in component communication. It is used to communicate from child to parent component using custom event binding.
*/
