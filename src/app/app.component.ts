import { Component } from '@angular/core';
import { employeeModel } from './models/employee.models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Yogesh';

  empObj: employeeModel = {
    name: 'john Doe',
    deptNo: 10,
    loc: 'Mumbai',
  };

  constructor() {
    //setTimeout(() => {
    this.name = 'Yogesh Chavan';
    //}, 3000);
  }
  saveData(emp: any): void {
    this.empObj = emp;
  }
  updateName(): void {
    this.empObj.name = 'rushi jadhav';
    //In above condtion here we changing in same reference so ngOnChanges is not called
  }
  updateLoc(): void {
    this.empObj.loc = 'pimpalgaon';
  }
  updateObject(): void {
    this.empObj = { name: 'jack sparrow', deptNo: 20, loc: 'Pune' };
    /*
    In above condition here we assign new reference so ngOnChanges & ngDoCheck in DocheckComponet fires every time when update() function call each time
    */
  }
}
