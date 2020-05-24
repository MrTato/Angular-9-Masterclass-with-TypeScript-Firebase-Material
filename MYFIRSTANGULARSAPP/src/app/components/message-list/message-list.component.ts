import { MessageComponent } from './../message/message.component';
import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ContentChild, AfterContentInit, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, AfterViewInit, AfterContentInit{

  // This allows the parent component to have access to a child component
  @ViewChild(MessageComponent) firstMessageComponent: MessageComponent;
  @ViewChildren(MessageComponent) allMessageComponents: QueryList<MessageComponent>;

  @ContentChild(MessageComponent) firstProjectedMessageComponent: MessageComponent;
  @ContentChild(`tempMessage`) tempMessageComponent: MessageComponent;
  @ContentChildren(MessageComponent) allProjectedMessageComponents: QueryList<MessageComponent>;

  messages: string[] = [
    "Message 1",
    "Message 2",
    "Message 3",
    "Message 4"
  ];

  constructor() {
  }

  ngAfterViewInit() {
    this.firstMessageComponent.message = `This was changed from the message list component's ngAfterViewInit method`;
    this.allMessageComponents.toArray().forEach(message => {
      if(message.message !== `This was changed from the message list component's ngAfterViewInit method`) {
        message.message = `This was changed from the message list component's ngAfterViewInit method using ViewChildren`;
      }
    });
  }

  ngAfterContentInit() {
    this.firstProjectedMessageComponent.message = `The projected message was also changed`;
    this.allProjectedMessageComponents.toArray().forEach(message => {
      if(message.message !== `The projected message was also changed`) {
        message.message = `The projected message was also changed using ContentChildren`;
      }
    });
    this.tempMessageComponent.message = `The projected message was also changed using a template variable`;
  }

  ngOnInit() {

  }

}
