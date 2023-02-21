import { Component, OnInit } from '@angular/core';
import { EnrollService } from './services/enroll.service';

@Component({
  selector: 'app-subscribe-service',
  templateUrl: './subscribe-service.component.html',
  styleUrls: ['./subscribe-service.component.css'],
  //providers: [EnrollService],
})

export class SubscribeServiceComponent implements OnInit {
  constructor(private enrollService: EnrollService) {}

  title = 'SubscribeService';

  ngOnInit() {}
}
