import { Component, OnInit } from '@angular/core';
import { DataService } from '../../PROCADEMY/obserables-subject/data.service';

@Component({
  selector: 'app-obserables-subject',
  templateUrl: './obserables-subject.component.html',
  styleUrls: ['./obserables-subject.component.css']
})
export class ObserablesSubjectComponent implements OnInit {

  title = 'AngularObservables';

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}