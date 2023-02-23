import { Component, OnInit } from '@angular/core';
import { UserServiceDetails } from '../../PROCADEMY/user-detail-service/services/user.service';

@Component({
  selector: 'app-user-detail-service',
  templateUrl: './user-detail-service.component.html',
  styleUrls: ['./user-detail-service.component.css'],
  providers: [UserServiceDetails],
})
export class UserDetailServiceComponent implements OnInit {
  title = 'UserDetailService';

  constructor(private userServiceDetails: UserServiceDetails) {}

  ngOnInit() {}
}
