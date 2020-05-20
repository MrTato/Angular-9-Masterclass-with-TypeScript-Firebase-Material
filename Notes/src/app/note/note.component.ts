import { NoteService } from './../services/note.service';
import { NoteListComponent } from './../note-list/note-list.component';
import { SingleNoteComponent } from '../note-list/single-note/single-note.component';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {

  noteText: string;

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
  }

  onKeyPress(keyUpEvent) {
    console.log(keyUpEvent);
    if(keyUpEvent.code == 'Enter') {
      let singleNote: SingleNoteComponent = new SingleNoteComponent();
      singleNote.noteText = this.noteText;
      this.noteService.addNote = singleNote;
      this.noteText = "";
    }
  }

}
