import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VCChildComponent } from '../vc-child/vc-child.component';

@Component({
  selector: 'app-vc-parent',
  templateUrl: './vc-parent.component.html',
  styleUrls: ['./vc-parent.component.css']
})
export class VCParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'ViewChild';

  @ViewChild('dobInput') dateOfBirth: ElementRef;
  @ViewChild('ageInput') age: ElementRef;

  @ViewChild(VCChildComponent, {static: true}) demoComp: VCChildComponent;

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
    console.log(this.dateOfBirth);
    // console.log(this.age);
  }
}

/*
This code is using the ViewChild decorator from Angular to obtain a reference to an instance of the VCChildComponent component.

The ViewChild decorator is used to inject a reference to a child component, directive or element into a parent component. The first argument to the decorator specifies the type of the child component or directive to be injected, and the second argument is an options object which can be used to specify whether the reference should be retrieved statically or dynamically.

In this case, the static option is set to true, which means that the reference to the VCChildComponent instance will be obtained at the earliest opportunity, which is during the creation of the parent component.

The static option in this code snippet is set to false. This means that the demoComp property will be initialized at runtime rather than at compile time. When static is set to false, Angular waits until the component is created and rendered before initializing the property.

The obtained reference will be assigned to the demoComp property of the parent component. This allows the parent component to access properties and methods of the child component, which can be useful for performing inter-component communication or manipulating the child component's behavior.
*/