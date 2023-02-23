import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../PROCADEMY/user-detail-service/models/user-model';
import { UserServiceDetails } from '../../../PROCADEMY/user-detail-service/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userServiceDetails: UserServiceDetails) { }

  user: UserModel;

  ngOnInit() {
    this.userServiceDetails.onShowDetailsClicked.subscribe((data: UserModel)=>{
      this.user = data;
    })
  }

}