import { Injectable } from '@angular/core';

@Injectable()
export class EnrollService {
  constructor() {}

  OnEnrollClicked(title: string) {
    alert('Thank you for enrolling to ' + title + ' course.');
  }
}
