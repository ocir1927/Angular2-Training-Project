import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  MdInputModule,
  MdListModule,
  MdError,
  MdCheckboxModule,
  MdButtonModule,
  MdCardModule,
  MatIconModule
} from '@angular/material';

import { AppComponent } from './app.component';

import { TweetboxComponent } from './tweetbox-component/tweetbox-component.component';

import { LoginComponent } from './login-component/login-component.component';
import { InputEmailComponent } from './login-component/input-email/input-email.component';
import { InputPasswordComponent } from './login-component/input-password/input-password.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { appRoutes } from './app.routes';
import { TodoComponent } from './todo/todo.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetboxComponent,
    LoginComponent,
    InputEmailComponent,
    InputPasswordComponent,
    TodoComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MatIconModule,
    MdListModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
