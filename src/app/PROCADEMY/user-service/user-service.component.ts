import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { UserService } from '../../PROCADEMY/user-service/services/user.service';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css'],
  //providers:[UserService]
})
export class UserServiceComponent implements OnInit {
  title = 'UserService';

  constructor(private userService: UserService){}

  users: {name: string, status: string}[] = [];

  ngOnInit(){
    this.users = this.userService.users;
  }
}