import { NoteService } from './../services/note.service';
import { SingleNoteComponent } from './single-note/single-note.component';
import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})

/**
 * @author Bayardo Lopez
 * This is the component that handles the list of notes in the note service
 */
export class NoteListComponent implements OnInit {

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
  }

  /**
   * Indicates if the array of notes is empty
   */
  get isNotesEmpty() {
    return this.noteService.notes.length == 0;
  }

  /**
   * deletes a note from the notes array found in the note service, using the index of the single-note component
   * @param index receives the index of the note to be deleted
   */
  set deleteNote(index: number) {
    this.noteService.notes.splice(index, 1);
  }

}
