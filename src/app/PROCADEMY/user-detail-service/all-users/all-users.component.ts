import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../PROCADEMY/user-detail-service/models/user-model';
import { UserServiceDetails } from '../../../PROCADEMY/user-detail-service/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})

export class AllUsersComponent implements OnInit {

  constructor(private userServiceDetails: UserServiceDetails) { }

  users: UserModel [] = [];
  
  ngOnInit() {
    this.users = this.userServiceDetails.users;
  }

  showDetails(user: UserModel){
    this.userServiceDetails.ShowUserDetails(user);
  }

}