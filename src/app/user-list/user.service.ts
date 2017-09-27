import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class UserService {

  private baseURL = "https://api.github.com";

  constructor(private http: Http) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get(this.baseURL + '/users').map(res => res.json());
  }

  findUserByUsername(username: string) {
    return this.http.get(this.baseURL + '/users/' + username).map(res => res.json());
  }

}

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  events_urs: string;
  gravatar_id: string;
  html_url: string;
  repos_url: string;
  site_admin: boolean;
  url: string;
  email: string;
  type: string;

}

