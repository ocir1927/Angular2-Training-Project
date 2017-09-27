import { Component, OnInit } from '@angular/core';
import { User, UserService } from './user.service';
import { Router, Routes } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  term = new FormControl();
  constructor(private userService: UserService, private router: Router) {
    this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => this.userService.search(term).subscribe(data => {
        this.users = data.items
      }));


  }

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
