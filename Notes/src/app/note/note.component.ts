import { NoteService } from './../services/note.service';
import { SingleNoteComponent } from '../note-list/single-note/single-note.component';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

/**
 * @author Bayardo Lopez
 * This is the menu of notes, where notes are written.
 * When you press enter in the text input, a note is added to the note service, and the note-list component visualizes it
 */
export class NoteComponent implements OnInit {

  noteText: string;

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
  }
/**
 * Event that handles key presses.
 * When the key pressed is Enter, a new note with the text is sent to the note-list component
 * @param keyUpEvent is the key that was pressed
 */
  onKeyPress(keyUpEvent) {
    // console.log(keyUpEvent);
    if(keyUpEvent.code == 'Enter') {
      let singleNote: SingleNoteComponent = new SingleNoteComponent();
      singleNote.noteText = this.noteText;
      this.noteService.addNote = singleNote;
      this.noteText = "";
    }
  }

}
