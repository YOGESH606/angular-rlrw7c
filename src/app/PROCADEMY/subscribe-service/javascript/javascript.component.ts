import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  //providers: [EnrollService]
})
export class JavascriptComponent implements OnInit {

  title = "JavaScript";

  constructor(private enrollService: EnrollService){}
  ngOnInit() {}

  OnEnroll(){
    this.enrollService.OnEnrollClicked(this.title);
  }

 

}