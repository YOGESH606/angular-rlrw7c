import {
  Component,
  Input,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { employeeModel } from '../../models/employee.models';

@Component({
  selector: 'docheck',
  templateUrl: './docheck.component.html',
  //changeDetection: ChangeDetectionStrategy.Default,// -> in a default strategy, the angular revolves around the question of whether there are any changes in the value.
  changeDetection: ChangeDetectionStrategy.OnPush, //->changes detect when only reference are changed like obj = {}
})
export class DoCheckComponent {
  @Input() empObj: employeeModel;

  count1: number = 0;
  count2: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    this.count1++;
    console.warn('ngonchanges');
    console.log(changes);
  }
  /* Fires when Input() bound properties intialize first time Or It changes */

  ngDoCheck() {
    this.count2++;
    console.log(this.count1);
  }
  /*
  - Invoked after every change detection run
  
  - The ngDoCheck () is the method of DoCheck interface. The DoCheck is a lifecycle hook that invokes a custom change-detection function for a directive. The Angular classes NgClass, NgForOf, NgStyle, NgSwitchCase and UpgradeComponent implement DoCheck interface to perform change-detection.

  - When CD is run on a component, it goes through five stages:

    1.It updates its children components’ input bindings
    2.Runs OnChanges if there were changes in its input props
    3.Runs OnInit on the children components if it hasn’t already
    4.Runs DoCheck on the children’s components
    5.Runs its updateRenderer function to update the DOM interpolations
   */
}
