import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  txtEmail: string;
  txtPassword: string;
  localStorageEmail: string;
  localStoragePassword: string;

  constructor(private formBuilder: FormBuilder,private router: Router) {
    // form input value
    this.txtEmail = '';
    // form input value
    this.txtPassword = '';
    // local storage value
    this.localStorageEmail = '';
    // local storage value
    this.localStoragePassword = '';
  }

  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  /**
   * login user
   */
  public loginUser() {
    this.txtEmail = this.loginForm.get('email').value;
    this.txtPassword = this.loginForm.get('email').value;

    this.localStorageEmail = localStorage.getItem('email');
    this.localStoragePassword = localStorage.getItem('password');

    if (this.txtEmail === this.localStorageEmail && this.txtPassword === this.localStoragePassword) {
      alert("login successfull....");
      this.router.navigate(["/userList"]);
    }

  }

  /** reset form */
  public onReset(): void {
    this.loginForm.reset();
  }

}
