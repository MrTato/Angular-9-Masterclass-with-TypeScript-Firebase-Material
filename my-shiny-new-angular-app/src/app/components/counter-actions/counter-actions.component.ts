import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.scss']
})
export class CounterActionsComponent implements OnInit {

  @Output() counterChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleButton(operation: string) {
    this.counterChange.emit(operation);
    console.log(operation);
  }


}
