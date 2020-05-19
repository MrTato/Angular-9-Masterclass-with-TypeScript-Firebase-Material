import { SingleNoteComponent } from '../note-list/single-note/single-note.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: SingleNoteComponent[] = Array();

  set addNote(note: SingleNoteComponent) {
    this.notes.push(note);
  }
  constructor() { }
}
