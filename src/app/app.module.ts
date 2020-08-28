import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './gaurd/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [LoginComponent, RegisterComponent, UserComponent, UserListComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
