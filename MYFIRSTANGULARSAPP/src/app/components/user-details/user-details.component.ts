import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: any;

  users: Array<IUser>;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    // this.users = this.userService.getUsers();
    this.activatedRoute.data.forEach(data => this.users = data.users);

    this.activatedRoute.params.subscribe( params => {
      this.user = this.userService.getUserById(+params.id);
      console.log('UserDetailsComponent NgOnInit Activation');
    });

    this.activatedRoute.queryParams.subscribe( qs => console.log('Got the QS as: ', qs));
  }

}
