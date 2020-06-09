import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  prop: string;
  subscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscription = this.userService.propChanged.subscribe(
      (prop) => (this.prop = prop),
      err => console.log('Got an error as :', err),
      () => alert('The Observable was complete')
      );
  }

  changeProp() {
    this.userService.setProp('bar');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
