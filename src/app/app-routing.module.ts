import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from './gaurd/auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'userList', component: UserListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
