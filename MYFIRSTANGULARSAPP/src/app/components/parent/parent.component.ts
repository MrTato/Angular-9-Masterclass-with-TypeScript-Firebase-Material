import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dateToday: Date;
  // user: { name: string } = { name: `Jacob` };

  // changeProperty() {
  //   this.user.name = `Sam`;
  // }

  // changeObject() {
  //   this.user = { name: `Tom`};
  // }

  ngOnInit(): void {
    this.dateToday = new Date();
  }
}
