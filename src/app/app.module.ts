import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MdInputModule,
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

@NgModule({
  declarations: [
    AppComponent,
    TweetboxComponent,
    LoginComponent,
    InputEmailComponent,
    InputPasswordComponent,
    TodoComponent,
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

    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
