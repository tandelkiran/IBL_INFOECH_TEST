import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // base URL for data
  public baseURL: string = "http://localhost:3000/users";
  // observable of user
  public users$: Observable<User[]>;

  constructor(public http: HttpClient) {
    this.getUsers();
  }

  /** get users list */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}`);
  }

  /** register users */
  public registerUser(user : User): Observable<User> {
    debugger
    return this.http.post<User>(`${this.baseURL}`,user);
  }
}
