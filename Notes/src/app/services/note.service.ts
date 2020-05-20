import { SingleNoteComponent } from '../note-list/single-note/single-note.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * @author Bayardo Lopez
 * Contains the array of notes.
 * The note component adds notes
 * The note-list component shows the list of notes,
 *  and deletes notes if the user presses the delete button
 * @param notes this is the array of single-note components
 */
export class NoteService {

  notes: SingleNoteComponent[] = Array();

  /**
   * Adds a single-note to the notes array
   */
  set addNote(note: SingleNoteComponent) {
    this.notes.push(note);
  }
  constructor() { }
}
