import { NoteService } from './../services/note.service';
import { SingleNoteComponent } from './single-note/single-note.component';
import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
  }

  get isNotesEmpty() {
    return this.noteService.notes.length == 0;
  }

  set deleteNote(index: number) {
    console.log(index);
    this.noteService.notes.splice(index, 1);
  }

}
