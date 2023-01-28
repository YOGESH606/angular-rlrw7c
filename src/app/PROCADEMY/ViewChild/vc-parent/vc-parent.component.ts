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