import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vc-child',
  templateUrl: './vc-child.component.html',
  styleUrls: ['./vc-child.component.css']
})
export class VCChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sayHello(){
    console.log('Hello from demo component class!');
  }

}