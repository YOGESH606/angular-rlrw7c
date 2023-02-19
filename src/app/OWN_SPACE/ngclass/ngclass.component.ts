import { Component, Input } from '@angular/core';

@Component({
  selector:'ngclass',
  templateUrl:'./ngclass.component.html',
  styleUrls:['./ngclass.component.css']
})

export class ngClassComponent {
  @Input() name: string;
}