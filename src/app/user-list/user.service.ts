import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class UserService {

  private baseURL = "https://api.github.com";

  constructor(private http: Http) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseURL + '/users').map(res => res.json());
  }

  findUserByUsername(username: string) {
    return this.http.get(this.baseURL + '/users/' + username).map(res => res.json());
  }

  search(username: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.append('q', username + ' in:login');
    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    return this.http.get(this.baseURL + '/search/users', requestOptions).map(res => res.json());
  }

}

export class User {
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

