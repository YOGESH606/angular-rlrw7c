import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../PROCADEMY/user-service/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  //providers:[UserService]
})
export class AdduserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  username: string = '';
  status: string = 'active';

  AddUser(){
    this.userService.AddNewUser(this.username, this.status);
    console.log(this.userService)
  }

}