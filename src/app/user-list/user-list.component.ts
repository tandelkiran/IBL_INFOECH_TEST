import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  // observable of pokemone
  public users$: Observable<User[]>;
  public txt: string;
  constructor(public userService: UserService) {
  }

  public ngOnInit(): void {
    this.getUsers();

  }
  /**
   * get list of all users
   */
  public getUsers(): void {
    this.users$ = this.userService.getUsers();
  }

}
