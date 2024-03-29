import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<IUser>;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

  }

  ngOnInit() {
    // this.activatedRoute.data.forEach(data => this.users = data.users);
    this.userService.getUsersViaREST().subscribe(
      users => this.users = users
    );
  }

}
