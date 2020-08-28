import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // observable of users
  public users$: Observable<User[]>;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  /**
   * get list of all users
   */
  public getUsers(): void {
    this.users$ = this.userService.getUsers();
  }

}
