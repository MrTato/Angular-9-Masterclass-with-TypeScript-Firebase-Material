import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dateToday: Date;
  users: IUser[];
  filterIdType: string = '';
  // user: { name: string } = { name: `Jacob` };

  // changeProperty() {
  //   this.user.name = `Sam`;
  // }

  // changeObject() {
  //   this.user = { name: `Tom`};
  // }
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.dateToday = new Date();
    this.users = this.userService.getUsers();
  }

  addUser() {
    this.userService.addUser({
      id: this.users.length + 2,
      name: 'Jacob Riglin',
      email: 'jacob@domain.com'
    })
  }
}
