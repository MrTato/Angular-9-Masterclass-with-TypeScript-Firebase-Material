import { NoteService } from '../../services/note.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.scss']
})
export class SingleNoteComponent implements OnInit {

  @Input() noteText: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.noteText);
  }

}
