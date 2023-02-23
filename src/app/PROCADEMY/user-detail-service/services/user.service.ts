import { EventEmitter, Injectable } from '@angular/core';
import { UserModel } from '../../../PROCADEMY/user-detail-service/models/user-model';

@Injectable()
export class UserServiceDetails {
  constructor() {}

  users = [
    {name: 'John', job: 'Teacher', gender: 'Male', country: 'United States', age: 35, avatar: 'assets/avatar/john.jpeg'},
    {name: 'Mark', job: 'Designer', gender: 'Male', country: 'Germany', age: 35, avatar: 'assets/avatar/mark.jpeg'},
    {name: 'Merry', job: 'Lawyer', gender: 'Female', country: 'Ireland', age: 35, avatar: 'assets/avatar/merry.jpeg'},
    {name: 'Steve', job: 'Doctor', gender: 'Male', country: 'India', age: 35, avatar: 'assets/avatar/steve.jpeg'}
]

  onShowDetailsClicked = new EventEmitter<UserModel>();

  ShowUserDetails(user: UserModel) {
    this.onShowDetailsClicked.emit(user);
  }
}
