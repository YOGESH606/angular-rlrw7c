import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cc-child',
  templateUrl: './cc-child.component.html',
  styleUrls: ['./cc-child.component.css']
})
export class CcChildComponent implements OnInit {

  constructor() { }

  @ContentChild('paragraph') paragraphEle : ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.paragraphEle.nativeElement.textContent = 'Projection successful'
    console.log(this.paragraphEle)
  }

}