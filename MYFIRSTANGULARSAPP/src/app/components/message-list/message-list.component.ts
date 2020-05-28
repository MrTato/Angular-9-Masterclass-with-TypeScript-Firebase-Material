import { MessageComponent } from './../message/message.component';
import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ContentChild, AfterContentInit, ContentChildren } from '@angular/core';
import { CanComponentDeactivate } from 'src/app/guards/confirmation/confirmation.guard';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements CanComponentDeactivate {
  messages: Array<{ message: string }> = [];
  message: string = '';

  addAMessage() {
    this.messages.push({ message: this.message });
    this.message = '';
  }

  onMessageDelete($event) {
    this.messages.splice($event, 1);
  }

  changeFirstMessage() {
    this.messages[0].message = 'New and changed Message!';
  }

  confirm() {
    return confirm('Are you sure you want to navigate away?');
  }

}
