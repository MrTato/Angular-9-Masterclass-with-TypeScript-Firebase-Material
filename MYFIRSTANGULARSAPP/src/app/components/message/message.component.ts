import { Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent
implements
OnInit,
OnChanges,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{

  @Input() message: string;
  @Input() index: number;
  @Output() messageDeleted: EventEmitter<number> = new EventEmitter<number>();

  // constructor is called first. this.message and this.index have not been set
  constructor() {
    console.log(`Message Constructor: message: ${this.message} and index: ${this.index}`);
  }

  // ngOnChanges is called every time there are changes to the @Input properties
  // changes contains an object with the @Input variables as the object properties
  ngOnChanges(changes: SimpleChanges) {
    console.log(`Message ngOnChanges: `);
    for(let prop in changes) {
      console.log(`Property name: ${prop}. Current value: ${changes[prop].currentValue}. PrevValue: ${changes[prop].previousValue}`)
    }
  }

  // ngOnInit is called next, and is called only once
  ngOnInit() {
    console.log(`Message ngOnInit: message: ${this.message} and index: ${this.index}`);
  }

  // gets called whenever there is a change in the component, like an HTTP request that has been made
  ngDoCheck() {
    console.log(`Message ngDoCheck: message: ${this.message} and index: ${this.index}`);
  }

  // This function gets called right after Angular projects some view of a particular content
  ngAfterContentInit() {
    console.log(`Message ngAfterContentInit: `);
  }

  // This function gets called after the ngDoCheck function
  ngAfterContentChecked() {
    console.log(`Message ngAfterContentChecked: `);
  }

  ngAfterViewInit() {
    console.log(`Message ngAfterViewInit: `);
  }

  ngAfterViewChecked() {
    console.log(`Message ngAfterViewChecked: `);
  }

  // Gets called right before Angular is about to remove an object from the DOM
  ngOnDestroy() {
    console.log(`Message ngOnDestroy`);
  }

  delete() {
    this.messageDeleted.emit(this.index);
  }

}
