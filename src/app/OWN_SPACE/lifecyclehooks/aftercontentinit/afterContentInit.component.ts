import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
} from '@angular/core';
import { employeeModel } from '../../models/employee.models';
import { ChildComponent } from './child.component';

@Component({
  selector: 'aftercontentinit',
  templateUrl: './afterContentInit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AfterContentInitComponent {
  @Input() empObj: employeeModel;
  @ContentChild(ChildComponent) childObj: ChildComponent;

  name: string = 'xyz';

  constructor() {
    console.log('constructor called');
  }
  ngOnInit() {
    // Invoked once the component is initialized.
    console.log('ngOnInit called');
  }
  ngOnChanges() {
    //Invoked after a bound input property changes.
    console.log('ngOnChanges called');
  }
  ngDoCheck() {
    //Invoked after every change detection run
    console.log('ngDocheck Called');
  }
  ngAfterContentInit() {
    //Invoked after content (ng-content) has been projected into view.
    console.log('ngAfterContentInit called ' + this.childObj.Address);
  }
  ngAfterContentChecked() {
    //called after every subsequent ngDoCheck
    //Called after the projected view has been checked
    console.log(' ngAfterContentChecked called ' + this.childObj.Address);
  }
  ngAfterViewInit() {
    //called after a component’s view and its children’s views have been created and fully initialized.
    console.log('ngAfterViewInit ' + this.childObj.Address);
  }
  ngAfterViewChecked() {
    //Called after the projected view has been checked
    console.log('ngAfterViewChecked ' + this.childObj.Address);
  }
  ngDestroy() {
    //called before component is destoroyed./ Use to avoid memory leaks
    /*
    1.Used to unsubscribe observable
    2.Used to clear Intervals
    3.Used to detach event
    */

    console.log('ngDestroy Called');
  }
}

/*
  ngAfterContentInit() is a callback method which will get called by Angular immediately after it has completed initialization of directive’s content and after every default change detection runs. It will be invoked only once when the directive is instantiated.

  And ngAfterContentInit() lifecycle hook will get called after the following lifecycle hooks get invoked; ngOnChanges(), ngOnInit() and ngDoCheck().

  These are the hooks for components or directives, in call order:
    1.constructor()
    2.OnChanges
    3.OnInit
    4.DoCheck
    5.OnDestroy

  And these are the hooks for a component’s children components:
    1.AfterContentInit
    2.AfterContentChecked
    3.AfterViewInit
    4.AfterViewChecked

   Constructor Vs ngOnInit
   The constructor is a method in TypeScript whereas ngOnInit is a lifecycle hook method provided by Angular framework. 
   To inject dependencies that are available outside the component can be done in the constructor. 
   The logic to be executed when the component first renders on the view can be placed in ngOnInit.
*/
