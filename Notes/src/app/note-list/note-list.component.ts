import { NoteService } from './../services/note.service';
import { SingleNoteComponent } from './single-note/single-note.component';
import { Component, OnInit, Output } from '@angular/core';

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
    console.log(this.noteService.notes.length);
    return this.noteService.notes.length == 0;
  }

}
