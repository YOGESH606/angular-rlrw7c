import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-parent',
  templateUrl: './cd-parent.component.html',
  styleUrls: ['./cd-parent.component.css'],
})
export class CdParentComponent implements OnInit {
  constructor() {}
  title = 'CustomDirectives';
  active: boolean = true;
  display: boolean = false;
  displayCSD: boolean = false;
  ngOnInit() {}

  DisplayNotice(): void {
    this.display = true;
  }
  Display_CSD(): void {
    this.displayCSD = true;
  }
}
