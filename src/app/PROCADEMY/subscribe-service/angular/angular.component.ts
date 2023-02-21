import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  //providers: [EnrollService]
})
/*
 here we can comment above providers array due to hieraechical injection where we use providers array in module .ts file. Due to this EnrollService is available all the components. 

 In the case where a service is provided in both a parent and a child component, the child component's injector will find the service provider in its own providers array first and will use that instance of the service. The parent component's injector will use its own instance of the service.
*/
export class AngularComponent implements OnInit {

  title="Angular";

  constructor(private enrollService: EnrollService){}
  ngOnInit() {}

  OnEnroll(){
    this.enrollService.OnEnrollClicked(this.title);
  }

  

}