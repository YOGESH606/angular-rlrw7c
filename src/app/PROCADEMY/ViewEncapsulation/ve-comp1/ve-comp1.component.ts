import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ve-comp1',
  templateUrl: './ve-comp1.component.html',
  styleUrls: ['./ve-comp1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VEComp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'ViewEncapsulation';

}