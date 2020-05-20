import { NoteService } from '../../services/note.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.scss']
})

/**
 * @author Bayardo Lopez
 * A single note. The array of notes is in the note service, and is handled by the note-list component
 * @param noteText receives the text from the note component once it creates the single-note
 * @param index receives the index of the note in the list of notes
 * @param onClickDelete used by onClick() to emit the note that the user wants to delete with the delete button
 */
export class SingleNoteComponent implements OnInit {

  @Input() noteText: string;
  @Input() index: number;
  @Output() onClickDelete = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.noteText);
  }

/**
 * Emits the index of the note that the user wants to delete to the note-list component
 */
  onClick() {
    // console.log(this.index);
    this.onClickDelete.emit(this.index);
  }

}
