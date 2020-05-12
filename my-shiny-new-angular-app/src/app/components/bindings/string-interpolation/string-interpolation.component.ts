import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {
  message = `This is some random message`;

  constructor() { }

  ngOnInit(): void {
  }

  getMessage() {
    console.log('This method was called');
    return this.message;
  }

}
