import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() {}

  users = [
    { name: 'John', status: 'active' },
    { name: 'Mark', status: 'inactive' },
    { name: 'Steve', status: 'active' },
  ];

  AddNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
  }
}
