import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.scss']
})
export class CounterActionsComponent implements OnInit {
  // If the @Input property has a name 'counter'
  // Then the @Output property must have a name 'counterChange'
  @Input() counter: number;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleButton(operation: string) {
    operation == 'INC' ? this.counter++ : this.counter--;
    this.counterChange.emit(this.counter);
  }


}
