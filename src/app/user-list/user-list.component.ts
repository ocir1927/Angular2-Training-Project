import { Component, OnInit } from '@angular/core';
import { User, UserService } from './user.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(usersData => {
      this.users = usersData;
      console.log(this.users)
    });
  }

  goToUserDetails(username: string) {
    this.router.navigate(['/users/' + username]);
  }

}
