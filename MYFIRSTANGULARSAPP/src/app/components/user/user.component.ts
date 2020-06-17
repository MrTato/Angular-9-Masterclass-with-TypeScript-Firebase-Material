import { Component, OnInit, Input } from '@angular/core';
import { HookLogger } from 'src/app/decorators/class.decorator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
@HookLogger()
export class UserComponent {
  @Input() user;
}
