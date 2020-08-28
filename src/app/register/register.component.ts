import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // registration form
  public registerForm: FormGroup;
  // observable of pokemone
  public users$: Observable<User[]>;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  public ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      dob: [''],
      email: [''],
      password: ['']
    });
  }

  /**
   * register user
   */
  public onRegister(): void {
    this.userService.registerUser(this.registerForm.value).subscribe((userDate) => {
      localStorage.setItem('email', userDate.email);
      localStorage.setItem('password', userDate.password);
      alert("registration done...");
    })
  }

  /**
   * reset form
   */
  public onReset(): void {
    this.registerForm.reset();
  }

}
