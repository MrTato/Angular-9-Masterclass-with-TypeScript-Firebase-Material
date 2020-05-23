import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

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

}
