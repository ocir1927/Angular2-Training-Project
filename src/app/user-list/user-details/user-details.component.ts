import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [UserService]
})
export class UserDetailsComponent implements OnInit {
  userLogin: string;
  userDetails: UserDetails;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.userLogin = params.login);
    this.userService.findUserByUsername(this.userLogin).subscribe(userData => {
      this.userDetails = userData;
    });
  }

}

export class UserDetails {
  login: string;
  avatar_url: string;
  url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  created_at: string;
}