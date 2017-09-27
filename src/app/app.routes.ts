import { Routes } from '@angular/router';
import { TweetboxComponent } from './tweetbox-component/tweetbox-component.component';
import { LoginComponent } from './login-component/login-component.component';
import { TodoComponent } from './todo/todo.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';


export const appRoutes: Routes = [
    {
        path: 'tweetbox',
        component: TweetboxComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'todo',
        component: TodoComponent
    },
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'users/:login',
        component: UserDetailsComponent
    }
]