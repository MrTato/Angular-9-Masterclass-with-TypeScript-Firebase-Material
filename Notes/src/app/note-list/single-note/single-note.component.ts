import { NoteService } from '../../services/note.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.scss']
})
export class SingleNoteComponent implements OnInit {

  @Input() noteText: string;
  @Input() index: number;
  @Output() onClickDelete = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.noteText);
  }

  onClick() {
    console.log(this.index);
    this.onClickDelete.emit(this.index);
  }

}
